import { Routes } from '@angular/router';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import {InicioComponent} from './pages/inicio/inicio.component';
import {ServiciosComponent} from './pages/servicios/servicios.component';

export const routes: Routes = [
    {path: '',  component: InicioComponent},
    {path: 'contact', component: ContactoComponent},
    {path: 'about', component: NosotrosComponent},
    {path:'servicios', component: ServiciosComponent},
    {path: 'inicio',  component: InicioComponent},
];
