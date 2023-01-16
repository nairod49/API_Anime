import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ImplementApiAnimeService {

  constructor(private httpclient: HttpClient) { }

  getAllAnime() {
    return this.httpclient.get(`${environment.animeUrlApi}/anime`);
  }

  getAnimeDB() {
    return this.httpclient.get(`${environment.apiAnime}/animes`)
  }
}
