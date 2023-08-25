import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';

import { Gif, SearchResponse } from '../interfaces/gifs.interfaces';

const GIPHY_SERVICE_URL = 'https://api.giphy.com/v1/gifs';
const GIPHY_API_KEY = '6A72nLakDgZkmEWEc5bEJ35jFAO6SwYF';

@Injectable({
  providedIn: 'root'
})

export class GifsService {
  /* Propiedades */
  private _tagsHistory: string[] = [];
  public gifsList: Gif[] = [];

  /* Metodos */
  constructor(private http:HttpClient) {
    this.loadLocalStorage();
  }

  get tagsHistory(): string[] {
    return [...this._tagsHistory];
  }

  private organizeHistory(newTag: string): void {
    //No aceptar cadenas vacias
    if(newTag.length === 0) return;
    //No repetir tags
    newTag = newTag.toLowerCase().trim();
    if(this._tagsHistory.includes(newTag)) {
      this._tagsHistory = this._tagsHistory.filter((currentTag) => currentTag !== newTag);
    }
    //Colocar nuevamente el tag al inicio del historial
    this._tagsHistory.unshift(newTag);
    //Solo permitir 10 elementos en el historial
    if(this._tagsHistory.length > 10) this._tagsHistory.pop();
    this.saveLocalStorage();
  }

  private saveLocalStorage(): void {
    localStorage.setItem('history', JSON.stringify( this._tagsHistory ));
  }

  private loadLocalStorage(): void {
    if(!localStorage.getItem( 'history' )) return;
    this._tagsHistory = JSON.parse(localStorage.getItem('history')!);
    this.searchTag(this._tagsHistory[0]);
  }

  public searchTag(newTag: string): void {
    //Validaciones del input
    this.organizeHistory(newTag);

    //Peticion a giphy
    const params = new HttpParams()
    .set('api_key', GIPHY_API_KEY)
    .set('limit', '10')
    .set('q', newTag);

    this.http.get<SearchResponse>(`${GIPHY_SERVICE_URL}/search`, { params: params })
    .subscribe(
      resp => {
        this.gifsList = resp.data;
      }
    );
  }
}
