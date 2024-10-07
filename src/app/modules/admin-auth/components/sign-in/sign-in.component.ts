import { AuthServiceService } from './../../service/auth-service.service';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { User } from 'src/app/modules/admin/model/user';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  signInForm!: FormGroup;
  userNotFoundFlag: boolean=false;

  constructor(private fb: FormBuilder,
    private snackBar:MatSnackBar,
    private authServiceService:AuthServiceService,
  private router:Router) {
    this.signInForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    if (this.signInForm.valid) {
      const email = this.signInForm.value.email;
      const password = this.signInForm.value.password;
      console.log('Email:', email);
      console.log('Password:', password);
      this.doSignIn({email,password});
    }
  }

  doSignIn(user:User){
    this.authServiceService.loginUser(user)
    .then(res=>{
      if(res=='User not found'){
        //this.showMessage(ms)
        this.userNotFoundFlag=true;
      }
      else if (res) {
        this.userNotFoundFlag=false;
        console.log('JWT Token:', res);
        const isValid = this.authServiceService.verifyJWT();
        console.log('Is token valid?', isValid);
        this.router.navigate(['admin-dashboard'])
      } else {
        console.log('Invalid login');
      }
    })
  }


  showMessage(msg:string){
    this.snackBar.open(msg, 'Close', {
      duration: 3000, // Duration in milliseconds
      horizontalPosition: 'center', // Optional: center horizontally
      verticalPosition: 'top', // Optional: top position
    });
  }

}
