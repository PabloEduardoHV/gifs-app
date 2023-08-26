import { Component, Input, OnInit } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'gifs-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  /* Propiedades */
  @Input()
  public gif!: Gif;

  /**
   * @OnInit
   * Metodo especial de angular que se ejecuta cuando el componente ha sido inicializado
   */
  ngOnInit(): void {
    if( !this.gif ) throw new Error('property gif required');
  }
}
