import { Component } from '@angular/core';
import { Experiencia } from 'src/app/model/experiencia';
import { ServiceExperienciaService } from 'src/app/service/service-experiencia.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent {
  experiencia: Experiencia[] = [];

  constructor(private serviceExperiencia: ServiceExperienciaService, private tokenService: TokenService) {}

  isLogged = false;

  ngOnInit(): void {
    this.cargarExperiencia();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarExperiencia(): void {
    this.serviceExperiencia.lista().subscribe(data => {this.experiencia = data;})
  }

  delete(id?: number){
    if(id !=undefined){
      this.serviceExperiencia.delete(id).subscribe(data => {
        this.cargarExperiencia();
      }, err => {alert("No se pudo eliminar");})
    }
  }
}
