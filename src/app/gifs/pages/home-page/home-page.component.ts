import { Component } from '@angular/core';
import { GifsService } from '../../services/gifs-service.service';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'gifs-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  /* Propiedades */

  /* Metodos */
  constructor(private gifService: GifsService) {

  }

  get gifsList(): Gif[] {
    return this.gifService.gifsList;
  }
}
