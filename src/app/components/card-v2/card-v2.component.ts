import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Propiedad from 'src/app/interfaces/propiedad';

@Component({
  selector: 'app-card-v2',
  templateUrl: './card-v2.component.html',
  styleUrls: ['./card-v2.component.scss']
})
export class CardV2Component implements OnInit{
  @Input() data!: Propiedad;
  textoContacto!: string;
  
  constructor(private router: Router){ }

  ngOnInit(): void {
    let link = window.location.href.replace('#propiedades', '');
    if(!link.endsWith('/')){
      link = link.concat('/');
    }
    this.textoContacto = link.concat(`${this.data.id_propiedad}`);
  }
}
