import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NewExperienciaComponent } from './components/experiencia/new-experiencia.component';
import { EditarExperienciaComponent } from './components/experiencia/editar-experiencia.component';
import { NewEducacionComponent } from './components/educacion/new-educacion.component';
import { EditarEducacionComponent } from './components/educacion/editar-educacion.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'login', component:LoginComponent},
  {path: 'nuevaExperiencia', component: NewExperienciaComponent},
  {path: 'editarExperiencia/:id', component: EditarExperienciaComponent},
  {path: 'nuevaEducacion', component: NewEducacionComponent},
  {path: 'editarEducacion/:id', component: EditarEducacionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
