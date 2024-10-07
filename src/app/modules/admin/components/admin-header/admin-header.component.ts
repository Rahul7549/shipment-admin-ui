import { Router } from '@angular/router';
import { AuthServiceService } from './../../../admin-auth/service/auth-service.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.css']
})
export class AdminHeaderComponent {

  constructor(private authServiceService:AuthServiceService,
    private router:Router
  ){}

  logOut(){
    this.authServiceService.removeToken();
    this.router.navigate([''])

  }
}
