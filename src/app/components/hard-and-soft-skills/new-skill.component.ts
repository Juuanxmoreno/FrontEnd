import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skill } from 'src/app/model/skill';
import { SkillService } from 'src/app/service/skill.service';

@Component({
  selector: 'app-new-skill',
  templateUrl: './new-skill.component.html',
  styleUrls: ['./new-skill.component.css']
})
export class NewSkillComponent implements OnInit{
  nombre: string;
  porcentaje: number;

  constructor(private serviceSkills: SkillService, private router: Router) {}

  ngOnInit(): void{
  }

  onCreate(): void{
    const skill = new Skill(this.nombre, this.porcentaje);
    this.serviceSkills.save(skill).subscribe(
      data => {
        alert("Skill creada");
        this.router.navigate(['']);
      }, err =>{
        alert("No se pudo crear la skill");
        this.router.navigate(['']);
      }
    )
  }
}
