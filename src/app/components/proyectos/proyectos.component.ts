import { Component, OnInit } from '@angular/core';
import { Proyectos } from 'src/app/model/proyectos';
import { ProyectosService } from 'src/app/service/proyectos.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit{
  proyectos: Proyectos[] = [];

  constructor(private serviceProyectos: ProyectosService, private tokenService: TokenService) {}
  isLogged = false;

  ngOnInit(): void {
    this.cargarProyectos();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else{
      this.isLogged = false;
    }
  }

  cargarProyectos(): void{
    this.serviceProyectos.lista().subscribe(data => {
      this.proyectos = data;
    })
  }

  deleteProyectos(id: number){
    if(id != undefined){
      this.serviceProyectos.delete(id).subscribe(
        data => {
          this.cargarProyectos();
        }
      )
    }
  }

}
