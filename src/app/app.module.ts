import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home/home.component';
import { MainHttpComponent } from './main-http/main-http.component';
import {CommonModule} from '@angular/common';
import {provideHttpClient} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MainHttpComponent
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
