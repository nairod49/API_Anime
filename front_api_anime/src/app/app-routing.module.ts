import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CallAnimeApiComponent } from './components/call-anime-api/call-anime-api.component';
import { MapComponent } from './components/map/map.component';

const routes: Routes = [
  { path: 'api-call', component: CallAnimeApiComponent },
  { path: 'map', component: MapComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }