import { Component, OnInit } from '@angular/core';
import listadecapitales from 'src/assets/json/datoscapitales.json';


@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {

  capitales: any = listadecapitales;
  title = 'Mi primer mapa';
  lat = 43.0639133;
  lng = -2.4888884;
  zoom = 9;


  constructor() {}

  infoWindowOpened: any = null;
  previousInfoWindow: any = null;

  ngOnInit() {
    console.log(this.capitales);
 }


 selectMarker( infoWindow: any ) {
    if (this.previousInfoWindow === null) {
     this.previousInfoWindow = infoWindow;
    } else {
     this.infoWindowOpened = infoWindow;
     this.previousInfoWindow.close();
    }
    this.previousInfoWindow = infoWindow;
   }
/*    close_window() {
    if (this.previousInfoWindow != null ) {
      this.previousInfoWindow.close();
      }
    } */
}
