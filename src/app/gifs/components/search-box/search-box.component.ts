import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs-service.service';

@Component({
  selector: 'gifs-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent {
  /**
   * @tutorial
   * el @ViewChild equivale al document.getElementById()
   * el @ViewChildren equivale al docuemnt.getElementsById()
   */

  /* Propiedades */
  @ViewChild('txtTagInput') //Decorador que recibe como parámetro el id del elemento que queremos referenciar
  public tagInput!: ElementRef<HTMLInputElement>;

  /* Metodos */
  constructor(public gifsService: GifsService) {

  }
  searchTag(): void {
    const newTag = this.tagInput.nativeElement.value;
    if(newTag === '') return;
    this.gifsService.searchTag(newTag);
    this.tagInput.nativeElement.value = '';
    console.log('search box component');
    console.log(this.gifsService.tagsHistory);
  }

}
