import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Anime } from '../models/anime.models';

@Injectable({
  providedIn: 'root'
})
export class ImplementApiAnimeService {

  constructor(private httpclient: HttpClient) { }

  getAllAnime() {
    return this.httpclient.get(`${environment.animeUrlApi}/anime`);
  }

  getAnimeDB() {
    return this.httpclient.get(`${environment.apiAnime}/animes`);
  }

  addAnimeOnDB(anime: Anime) {
    const headers = { 'content-type': 'application/json'} 
    const body = anime;
    console.log(body);
    
    return this.httpclient.post<any>(`${environment.apiAnime}/animes`,  body).subscribe(data => {body});
  }

  getAnime(id: any) {
      return this.httpclient.get(`${environment.apiAnime}/animes/${id}`)
  }

  updateAnime(id: string, lng: any, lat: any){
    const headers = { 'content-type': 'application/json'} 
    const body = {longitude: lng, latitude: lat};
    return this.httpclient.put(`${environment.apiAnime}/animes/${id}`, body).subscribe(data => {body})
  }
}
