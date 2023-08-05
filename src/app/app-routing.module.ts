import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { PropertyComponent } from './pages/property/property.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { existePropiedadGuard } from './services/existe-propiedad.guard';
import { propiedadResolver } from './services/propiedad.resolver';

const routes: Routes = [
  { 
    path: '', redirectTo: '/inicio', pathMatch: 'full' 
  },
  { 
    path: 'inicio', component: HomeComponent 
  },
  { 
    path: 'contacto', component: ContactoComponent 
  },
  { 
    path: 'propiedad/:id_propiedad', 
    component: PropertyComponent, 
    resolve: {propiedad: propiedadResolver},
    canActivate: [existePropiedadGuard],
  },
  { 
    path: 'error', component: NotFoundComponent 
  },
  { 
    path: '**', redirectTo: '/error', pathMatch: 'full' 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
