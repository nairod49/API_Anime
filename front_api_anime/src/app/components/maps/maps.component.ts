import { Component, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';
import { lastValueFrom } from 'rxjs';
import { ImplementApiAnimeService } from 'src/app/services/implement-api-anime.service';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements AfterViewInit {
  private map: L.Map | undefined;
  allDBAnime!: any;
  constructor(private implementApiAnime: ImplementApiAnimeService) {}
 
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
    this.ajoutanime(this.map);
    tiles.addTo(this.map);
  }

  private async ajoutanime(map: L.Map | L.LayerGroup<any>,): Promise<void>{
  
      this.allDBAnime = await lastValueFrom(this.implementApiAnime.getAnimeDB())

      this.allDBAnime.forEach((val: any) => {
        if(val.longitude !== undefined && val.latitude !== undefined){
          
          let x = val.longitude
          let y = val.latitude
          let text= val.title
          
          this.addPoint(map,y,x,text);
        }
      });



  }

  

  private addPoint(map: L.Map | L.LayerGroup<any>, x:number, y:number, text:string):void {
    //appelle anime/:id/x & anime/:id/y
    var myIcon = L.icon({
      iconUrl: '../assets/my-icon.png',
      
    })
    L.marker([x,y],{title:"miraculous ladybug paris", icon: myIcon , autoPan:true}).addTo(map).bindPopup(text);
    
  }

  ngAfterViewInit(): void {
    this.initMap();

  }

}
