import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { interceptorProvider } from './service/interceptor-service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { BannerComponent } from './components/banner/banner.component';
import { LogoArgProgramaComponent } from './components/logo-arg-programa/logo-arg-programa.component';
import { SocialAndLoginComponent } from './components/social-and-login/social-and-login.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { FooterComponent } from './components/footer/footer.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';
import { NewExperienciaComponent } from './components/experiencia/new-experiencia.component';
import { EditarExperienciaComponent } from './components/experiencia/editar-experiencia.component';
import { NewEducacionComponent } from './components/educacion/new-educacion.component';
import { EditarEducacionComponent } from './components/educacion/editar-educacion.component';
import { HardAndSoftSkillsComponent } from './components/hard-and-soft-skills/hard-and-soft-skills.component';
import { EditarSkillComponent } from './components/hard-and-soft-skills/editar-skill.component';
import { NewSkillComponent } from './components/hard-and-soft-skills/new-skill.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AcercaDeComponent,
    BannerComponent,
    LogoArgProgramaComponent,
    SocialAndLoginComponent,
    ExperienciaComponent,
    EducacionComponent,
    ProyectosComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    NewExperienciaComponent,
    EditarExperienciaComponent,
    NewEducacionComponent,
    EditarEducacionComponent,
    HardAndSoftSkillsComponent,
    EditarSkillComponent,
    NewSkillComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({}),
    HttpClientModule,
    FormsModule
  ],
  providers: [
    interceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
