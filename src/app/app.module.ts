import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgOptimizedImage } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabeceraComponent } from './components/cabecera/cabecera.component';
import { HomeComponent } from './pages/home/home.component';
import { CardComponent } from './components/card-v1/card-v1.component';
import { CarruselComponent } from './components/carrusel/carrusel.component';
import { GaleriaV1Component } from './components/galeria-v1/galeria-v1.component';
import { GaleriaV2Component } from './components/galeria-v2/galeria-v2.component';
import { CardV2Component } from './components/card-v2/card-v2.component';

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    HomeComponent,
    CardComponent,
    CarruselComponent,
    GaleriaV1Component,
    GaleriaV2Component,
    CardV2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgOptimizedImage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
