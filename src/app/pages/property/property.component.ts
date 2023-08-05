import { Component, OnInit } from '@angular/core';
import { SafeUrl, DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import Propiedad from 'src/app/interfaces/propiedad';

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.scss']
})
export class PropertyComponent implements OnInit{
  constructor(
    private activated_route: ActivatedRoute,
    private dom_sanitizer: DomSanitizer){ }
  propiedad!: Propiedad;
  textoContacto: string = 'Hola, estoy interesado en la siguiente propiedad | ';
  indice: number = 0;

  ngOnInit(): void {
    this.activated_route.data.subscribe(({propiedad}) => {
      this.propiedad = propiedad;
    });      
    this.textoContacto = this.textoContacto.concat(window.location.href);
  }

  decrementar(): void{
    if(this.indice == 0){
      this.indice == (this.propiedad.imagenes.length);
    }else{
      this.indice--;
    }
    console.log(`Imagen numero: ${this.indice}`);
  }

  // Permite checkear que la url pasada es segura, sino no lo toma
  mostrarMapa(): SafeUrl {
    return this.dom_sanitizer.bypassSecurityTrustResourceUrl(this.propiedad.ubicacion_maps);
  }
}
