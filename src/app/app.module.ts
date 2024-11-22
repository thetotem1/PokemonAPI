import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CommonModule} from '@angular/common';
import {provideHttpClient} from '@angular/common/http';
import { MainPokemonComponent } from './main-pokemon/main-pokemon.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPokemonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
  ],
  providers: [provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
