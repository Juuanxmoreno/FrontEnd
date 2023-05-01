import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-social-and-login',
  templateUrl: './social-and-login.component.html',
  styleUrls: ['./social-and-login.component.css']
})
export class SocialAndLoginComponent {
  isLogged = false;

  constructor(private router:Router, private tokenService: TokenService) {}

  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }
  }

  onLogOut():void{
    this.tokenService.logOut();
    window.location.reload();
  }
  login(){
    this.router.navigate(['/login'])
  }
}
