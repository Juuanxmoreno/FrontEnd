import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NewExperienciaComponent } from './components/experiencia/new-experiencia.component';
import { EditarExperienciaComponent } from './components/experiencia/editar-experiencia.component';
import { NewEducacionComponent } from './components/educacion/new-educacion.component';
import { EditarEducacionComponent } from './components/educacion/editar-educacion.component';
import { EditarSkillComponent } from './components/hard-and-soft-skills/editar-skill.component';
import { NewSkillComponent } from './components/hard-and-soft-skills/new-skill.component';
import { EditarPerfilComponent } from './components/acerca-de/editar-perfil.component';
import { NewProyectoComponent } from './components/proyectos/new-proyecto.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'login', component:LoginComponent},
  {path: 'nuevaExperiencia', component: NewExperienciaComponent},
  {path: 'editarExperiencia/:id', component: EditarExperienciaComponent},
  {path: 'nuevaEducacion', component: NewEducacionComponent},
  {path: 'editarEducacion/:id', component: EditarEducacionComponent},
  {path: 'nuevaSkill', component: NewSkillComponent},
  {path: 'editarSkill/:id', component: EditarSkillComponent},
  {path: 'editarPerfil/:id', component: EditarPerfilComponent},
  {path: 'nuevoProyecto', component: NewProyectoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
