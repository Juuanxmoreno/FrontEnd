import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { ServiceExperienciaService } from 'src/app/service/service-experiencia.service';

@Component({
  selector: 'app-new-experiencia',
  templateUrl: './new-experiencia.component.html',
  styleUrls: ['./new-experiencia.component.css']
})
export class NewExperienciaComponent implements OnInit {
  nombreExperiencia: string = '';
  descripcionExperiencia: string = '';

  constructor(private serviceExperiencia: ServiceExperienciaService, private router: Router) {}

  ngOnInit(): void {
    
  }

  onCreate(): void {
    const expe = new Experiencia(this.nombreExperiencia, this.descripcionExperiencia);
    this.serviceExperiencia.save(expe).subscribe(
      data => {alert("Experiencia añadida");
        this.router.navigate(['']);
      }, err => {alert("Falló"); this.router.navigate(['']);}
    )
  }
}
