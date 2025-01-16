import { Routes } from '@angular/router';
import { FirstComponentComponent } from './first-component/first-component.component';
import { SecondComponentComponent } from './second-component/second-component.component';
import { ThirdComponentComponent } from './third-component/third-component.component';
import { ContactoTDComponent } from './contacto-td/contacto-td.component';
import { ContactoReactiveComponent } from './contacto-reactive/contacto-reactive.component';
import { ConsumirImagenComponent } from './consumir-imagen/consumir-imagen.component';





export const routes: Routes = [
    {path:'first', component:FirstComponentComponent},
    {path:'second', component:SecondComponentComponent},
    {path:'third', component:ThirdComponentComponent},
    { path: 'emailForm', component: ContactoTDComponent },
    { path: 'emailFormReactive', component: ContactoReactiveComponent },
    { path: 'imagen', component: ConsumirImagenComponent }

];
