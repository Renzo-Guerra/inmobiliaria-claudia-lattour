import { Component, OnInit } from '@angular/core';
import { PropiedadesService } from 'src/app/database/propiedades.service';
import Propiedad from 'src/app/interfaces/propiedad';

@Component({
  selector: 'app-galeria-v2',
  templateUrl: './galeria-v2.component.html',
  styleUrls: ['./galeria-v2.component.scss']
})
export class GaleriaV2Component implements OnInit {
  propiedades: Propiedad[] = [];

  constructor(private api:PropiedadesService) { }

  ngOnInit(): void {
    this.propiedades = this.api.getData();
  }
}
