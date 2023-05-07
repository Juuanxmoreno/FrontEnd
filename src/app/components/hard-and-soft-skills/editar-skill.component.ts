import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Skill } from 'src/app/model/skill';
import { SkillService } from 'src/app/service/skill.service';

@Component({
  selector: 'app-editar-skill',
  templateUrl: './editar-skill.component.html',
  styleUrls: ['./editar-skill.component.css']
})
export class EditarSkillComponent implements OnInit{
  skill: Skill = null;

  constructor(private serviceSkills: SkillService, private activatedRoute: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.serviceSkills.detail(id).subscribe(
      data => {
        this.skill = data;
      }, err => {
        alert("Error al modificar");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(){
    const id = this.activatedRoute.snapshot.params['id'];
    this.serviceSkills.update(id, this.skill).subscribe(
      data =>{
        alert("Skill actualizada");
        this.router.navigate(['']);
      }, err =>{
        alert("Error al modificar la skill");
        this.router.navigate(['']);
      }
    )
  }
}
