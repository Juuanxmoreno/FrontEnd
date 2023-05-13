import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyectos } from 'src/app/model/proyectos';
import { ProyectosService } from 'src/app/service/proyectos.service';
import { StorageService } from 'src/app/service/storage.service';

@Component({
  selector: 'app-new-proyecto',
  templateUrl: './new-proyecto.component.html',
  styleUrls: ['./new-proyecto.component.css']
})
export class NewProyectoComponent implements OnInit{
  nombre: string;
  descripcion: string;
  imagen: string;

  constructor(private serviceProyectos: ProyectosService, private router: Router, private activatedRoute: ActivatedRoute, private storageService: StorageService) {}

  ngOnInit(): void{
  }

  onCreate(): void{
    const proyectos = new Proyectos(this.nombre, this.descripcion, this.imagen);
    this.serviceProyectos.save(proyectos).subscribe(
      data => {
        alert("Proyecto añadido");
        this.router.navigate(['']);
      }, err => {
        this.router.navigate(['']);
      }
    )
  }

  imagenes: any[] = [];
  uploadImages(event: any) {
    let archivos = event.target.files;
    let reader = new FileReader();
    let nombre = "Proyecto_"

    reader.readAsDataURL(archivos[0]);
    reader.onloadend = () => {
      console.log(reader.result)
      this.imagenes.push(reader.result);
      this.storageService.subirImagen(nombre + Date.now(), reader.result).then(urlImagen => {
        console.log(urlImagen)
        this.imagen = urlImagen;
        event.target.value = '';
      });
    }
  }

}
