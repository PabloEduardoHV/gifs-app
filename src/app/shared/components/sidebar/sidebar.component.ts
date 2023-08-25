import { Component } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs-service.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  /* Propiedades */

  /*Metodos */
  constructor(private gifsService: GifsService){

  }

  get tags(): string[] {
    return this.gifsService.tagsHistory;
  }
}
