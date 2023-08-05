import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Propiedad from 'src/app/interfaces/propiedad';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit{
  @Input() propiedad!: Propiedad;
  textoContacto: string = 'Hola, estoy interesado en la siguiente propiedad | ';
  
  constructor(){ }

  ngOnInit(): void {
    let link = window.location.href.replace('#propiedades', '');
    if(!link.endsWith('/')){
      link = link.concat('/');
    }
    this.textoContacto = link.concat(`${this.propiedad.id_propiedad}`);
  }
}
