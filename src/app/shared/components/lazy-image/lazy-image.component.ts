import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shared-lazy-image',
  templateUrl: './lazy-image.component.html',
  styleUrls: ['./lazy-image.component.css']
})
export class LazyImageComponent implements OnInit{
  /* Propiedades */
  @Input()
  public imageUrl!: string;

  @Input()
  public imageAlt!: string;

  public hasLoaded: boolean = false;

  /* Metodos */
  ngOnInit(): void {
    if( !this.imageUrl ) throw new Error('Property imageUrl is required');
  }

  public onLoad(): void {
    console.log('Se cargó la imagen');
    this.hasLoaded = true;
  }

}
