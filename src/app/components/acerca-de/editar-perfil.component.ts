import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from 'src/app/model/persona';
import { PersonaService } from 'src/app/service/persona.service';
import { StorageService } from 'src/app/service/storage.service';

@Component({
  selector: 'app-editar-perfil',
  templateUrl: './editar-perfil.component.html',
  styleUrls: ['./editar-perfil.component.css']
})
export class EditarPerfilComponent implements OnInit {
  persona: Persona = null;

  constructor(private servicePersona: PersonaService, private activatedRoute: ActivatedRoute, private router: Router, private storageService: StorageService) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.servicePersona.detail(id).subscribe(data => { this.persona = data }, err => {
      alert("Error al modificar la educación");
      this.router.navigate([''])
    })
  }

  onUpdate() {
    const id = this.activatedRoute.snapshot.params['id'];
    this.persona.img = this.storageService.url;
    this.servicePersona.update(id, this.persona).subscribe(data => {
      this.router.navigate(['']);
    }, err => {
      alert("Error al editar el perfil");
      this.router.navigate([''])
    })
  }

  imagenes: any[] = [];
  uploadImages(event: any) {
    let archivos = event.target.files;
    let reader = new FileReader();
    let nombre = "Perfil_"
    let id = this.activatedRoute.snapshot.params['id']

    reader.readAsDataURL(archivos[0]);
    reader.onloadend = () => {
      console.log(reader.result)
      this.imagenes.push(reader.result);
      this.storageService.subirImagen(nombre + id, reader.result).then(urlImagen => {
        console.log(urlImagen)
      });
    }
  }

}
