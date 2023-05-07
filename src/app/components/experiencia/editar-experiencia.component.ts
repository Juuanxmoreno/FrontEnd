import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { ServiceExperienciaService } from 'src/app/service/service-experiencia.service';

@Component({
  selector: 'app-editar-experiencia',
  templateUrl: './editar-experiencia.component.html',
  styleUrls: ['./editar-experiencia.component.css']
})
export class EditarExperienciaComponent implements OnInit{
  experiencia: Experiencia = null;

  constructor(private serviceExperiencia: ServiceExperienciaService, private activatedRouter: ActivatedRoute, private router: Router) {}

  ngOnInit(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.serviceExperiencia.detail(id).subscribe(data => {this.experiencia = data}, err =>{alert("Error al modificar la experiencia")})
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.serviceExperiencia.update(id, this.experiencia).subscribe(data => {
      this.router.navigate(['']);
    },err =>{alert("Error al modificar")})
  }
}
