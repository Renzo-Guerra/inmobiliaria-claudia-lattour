import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgOptimizedImage } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabeceraComponent } from './components/cabecera/cabecera.component';
import { HomeComponent } from './pages/home/home.component';
import { GaleriaComponent } from './components/galeria/galeria.component';
import { CardComponent } from './components/card/card.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { BtnInicioComponent } from './components/btn-inicio/btn-inicio.component';
import { PropertyComponent } from './pages/property/property.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { PropiedadesComponent } from './pages/propiedades/propiedades.component';

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    HomeComponent,
    GaleriaComponent,
    CardComponent,
    NotFoundComponent,
    BtnInicioComponent,
    PropertyComponent,
    ContactoComponent,
    PropiedadesComponent
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
