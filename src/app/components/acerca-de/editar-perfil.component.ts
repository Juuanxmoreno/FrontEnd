import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from 'src/app/model/persona';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-editar-perfil',
  templateUrl: './editar-perfil.component.html',
  styleUrls: ['./editar-perfil.component.css']
})
export class EditarPerfilComponent implements OnInit{
  persona: Persona = null;

  constructor(private servicePersona: PersonaService, private activatedRoute: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.servicePersona.detail(id).subscribe(data => { this.persona = data }, err => {
      alert("Error al modificar la educación");
      this.router.navigate([''])
    })
  }

  onUpdate(){
    const id = this.activatedRoute.snapshot.params['id'];
    this.servicePersona.update(id, this.persona).subscribe(data => {
      this.router.navigate(['']);
    }, err => {
      alert("Error al modificar la educación");
      this.router.navigate([''])
    })
  }

  uploadImg($event:any){

  }

}
