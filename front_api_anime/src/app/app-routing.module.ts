import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CallAnimeApiComponent } from './components/call-anime-api/call-anime-api.component';

const routes: Routes = [
  { path: 'api-call', component: CallAnimeApiComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }