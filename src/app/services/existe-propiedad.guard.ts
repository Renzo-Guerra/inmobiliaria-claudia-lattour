import { CanActivateFn, Router } from '@angular/router';
import { PropiedadesService } from './propiedades.service';
import { inject } from '@angular/core';

export const existePropiedadGuard: CanActivateFn = (route, state) => {
  const propiedades = inject(PropiedadesService);
  if(!propiedades.existsProperty(route.paramMap.get('id_propiedad')!)){
    inject(Router).navigate(['error']);
    return false;
  }

  return true;
};
