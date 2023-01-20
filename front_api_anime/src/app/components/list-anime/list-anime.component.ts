import { Component } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { ImplementApiAnimeService } from 'src/app/services/implement-api-anime.service';

@Component({
  selector: 'app-list-anime',
  templateUrl: './list-anime.component.html',
  styleUrls: ['./list-anime.component.css']
})
export class ListAnimeComponent {
  allDBAnime!: any;
  constructor(private implementApiAnime: ImplementApiAnimeService) {}

  async ngOnInit(): Promise<void> {
    this.allDBAnime = await lastValueFrom(this.implementApiAnime.getAnimeDB())
  }
}
