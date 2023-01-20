import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { ImplementApiAnimeService } from 'src/app/services/implement-api-anime.service';

@Component({
  selector: 'app-anime',
  templateUrl: './anime.component.html',
  styleUrls: ['./anime.component.css']
})
export class AnimeComponent implements OnInit  {
  id!: string|null;
  anime!: any;
  constructor(private route: ActivatedRoute, private implementApiAnime: ImplementApiAnimeService) { }

  async ngOnInit(): Promise<void> {
    this.route.paramMap.subscribe(async (params: ParamMap) => {
      this.id = params.get('id');
    });
    this.anime = await lastValueFrom(this.implementApiAnime.getAnime(this.id))
  }

  addToCountry(lng: any, lat: any, idAnime: string){
    console.log(lng,lat,idAnime);
    this.implementApiAnime.updateAnime(idAnime, lng, lat);
    console.log("anime add to country");
    
  }
}
