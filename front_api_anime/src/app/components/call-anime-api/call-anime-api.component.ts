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

}
