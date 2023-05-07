import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/model/skill';
import { SkillService } from 'src/app/service/skill.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-hard-and-soft-skills',
  templateUrl: './hard-and-soft-skills.component.html',
  styleUrls: ['./hard-and-soft-skills.component.css']
})
export class HardAndSoftSkillsComponent implements OnInit{
  skill: Skill[] = [];

  constructor(private serviceSkills: SkillService, private tokenService: TokenService) {}
  isLogged = false;

  ngOnInit(): void{
    this.cargarSkills();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else{
      this.isLogged = false;
    }
  }

  cargarSkills(): void {
    this.serviceSkills.lista().subscribe(
      data =>{
        this.skill = data;
      }
    )
  }

  delete(id: number){
    if(id != undefined){
      this.serviceSkills.delete(id).subscribe(
        data =>{
          this.cargarSkills();
        }, err =>{
          alert("No se pudo eliminar la skill")
        }
      )
    }
  }

}
