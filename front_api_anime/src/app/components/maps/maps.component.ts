import { Component, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements AfterViewInit {
  private map: L.Map | undefined;

  private initMap(): void {
    this.map = L.map('map', {
      center: [ 39.8282, -98.5795 ],
      zoom: 3
    });
  
  const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });
    this.addPoint(this.map);
    tiles.addTo(this.map);
  }

  private addPoint(map: L.Map | L.LayerGroup<any>):void {
    //appelle anime/:id/x & anime/:id/y
    var myIcon = L.icon({
      iconUrl: '../assets/my-icon.png',
      
    })
    L.marker([48.862725,2.287592],{title:"miraculous ladybug paris", icon: myIcon , autoPan:true}).addTo(map);
  }

  ngAfterViewInit(): void {
    this.initMap();
   
  }

  

}
