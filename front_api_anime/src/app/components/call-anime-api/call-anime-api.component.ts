import { Component, OnInit } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { ImplementApiAnimeService } from 'src/app/services/implement-api-anime.service';

@Component({
  selector: 'app-call-anime-api',
  templateUrl: './call-anime-api.component.html',
  styleUrls: ['./call-anime-api.component.css']
})
export class CallAnimeApiComponent implements OnInit {

  allAnime!: any;
  constructor(private implementApiAnime: ImplementApiAnimeService) { }

  async ngOnInit(): Promise<void> {
    this.allAnime = await lastValueFrom(this.implementApiAnime.getAllAnime())
  }
  
  addlist(anime: any) {
    console.log("add api anime on bd");
    this.implementApiAnime.addAnimeOnDB({
      idAPI: anime.mal_id,
      images: anime.images.jpg.small_image_url,
      title: anime.title,
      episode: anime.episodes,
      statut: anime.status,
      date_debut: anime.aired.from,
      date_fin: anime.aired.to,
      duree: 0,
      note: 0,
      rank: 0,
      synopsis: anime.synopsis,
      streaming: anime.trailer.url
    })
  }

}
