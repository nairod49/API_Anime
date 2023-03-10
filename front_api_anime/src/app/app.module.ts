import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CallAnimeApiComponent } from './components/call-anime-api/call-anime-api.component';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { SharedModule } from './shared/shared.module';
import { FooterComponent } from './shared/footer/footer.component';
import { MapsComponent } from './components/maps/maps.component';
import { ListAnimeComponent } from './components/list-anime/list-anime.component';
import { AnimeComponent } from './components/anime/anime.component';

@NgModule({
  declarations: [
    AppComponent,
    CallAnimeApiComponent,
    NavbarComponent,
    FooterComponent,
    MapsComponent,
    ListAnimeComponent,
    AnimeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
