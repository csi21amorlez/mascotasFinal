import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListMascotasComponent } from './Components/list-mascotas/list-mascotas.component';
import { FormMascotasComponent } from './Components/form-mascotas/form-mascotas.component';


const routes: Routes = [

  //Ruta inicial
  {path:'', component:ListMascotasComponent},
  //Ruta para crear mascotas
  {path:'crearMascota', component:FormMascotasComponent},
  //Ruta para editar mascotas
  {path:'editar/:id', component:FormMascotasComponent},
  //Ruta en caso de fallo en url
  {path:'***', redirectTo:'/', pathMatch:'full'}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
