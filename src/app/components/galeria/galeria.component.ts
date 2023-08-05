import { Component, OnInit } from '@angular/core';
import { PropiedadesService } from 'src/app/services/propiedades.service';
import Propiedad from 'src/app/interfaces/propiedad';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.scss']
})
export class GaleriaComponent implements OnInit {
  propiedades: Propiedad[] = [];
  
  constructor(private api:PropiedadesService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe({})
    this.api.getData().subscribe(data => {
      this.propiedades = data; 
    });
  }
}
