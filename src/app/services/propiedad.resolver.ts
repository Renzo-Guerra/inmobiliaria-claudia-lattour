import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { PropiedadesService } from './propiedades.service';
import Propiedad from '../interfaces/propiedad';

export const propiedadResolver: ResolveFn<Propiedad | undefined> = (route, state) => {
  return inject(PropiedadesService).getProperty(route.paramMap.get('id_propiedad')!) 
};
