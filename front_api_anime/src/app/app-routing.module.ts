import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimeComponent } from './components/anime/anime.component';
import { CallAnimeApiComponent } from './components/call-anime-api/call-anime-api.component';
import { ListAnimeComponent } from './components/list-anime/list-anime.component';
import { MapsComponent } from './components/maps/maps.component';

const routes: Routes = [
  { path: 'api-call', component: CallAnimeApiComponent },
  { path: 'maps', component: MapsComponent },
  { path: 'list', component: ListAnimeComponent },
  { path: 'list/anime/:id', component: AnimeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }