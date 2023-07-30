import { Component, OnInit } from '@angular/core';
import { PropiedadesService } from 'src/app/database/propiedades.service';
import Propiedad from 'src/app/interfaces/propiedad';

@Component({
  selector: 'app-galeria-v1',
  templateUrl: './galeria-v1.component.html',
  styleUrls: ['./galeria-v1.component.scss']
})
export class GaleriaV1Component implements OnInit {
  propiedades: Propiedad[] = [];

  constructor(private api:PropiedadesService) { }

  ngOnInit(): void {
    this.propiedades = this.api.getData();
  }
}
