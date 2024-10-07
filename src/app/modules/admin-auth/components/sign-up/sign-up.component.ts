import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthServiceService } from '../../service/auth-service.service';
import { User } from 'src/app/modules/admin/model/user';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { passwordsMatchValidator } from 'src/app/share/validator/validator';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  signUpForm!: FormGroup;
  constructor(private fb: FormBuilder,
    private authServiceService:AuthServiceService,
    private snackBar: MatSnackBar,
    private router:Router) {
    this.signUpForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6)]]

    });
    this.signUpForm.get('confirmPassword')?.setValidators([
      passwordsMatchValidator(this.signUpForm.get('password')!)
    ]);
  }

  onSubmit() {
    if (this.signUpForm.valid) {
      const email = this.signUpForm.value.email;
      const password = this.signUpForm.value.password;
      this.doSignUp({email,password});
    }
  }

  doSignUp(user:User){
    this.authServiceService.registerUser(user).subscribe(
      (success)=>{
        this.snackBar.open('Successfully signed-up please login', 'Close', {
          duration: 3000, // Duration in milliseconds
          horizontalPosition: 'center',
          verticalPosition: 'top',
          panelClass: ['success-snackbar'],// Optional: Add a class for styling
        },
      );
      this.router.navigate(['']);
      },
      (error)=>{
        this.snackBar.open(error.message, 'Close', {
          duration: 3000, // Duration in milliseconds
          horizontalPosition: 'center', // Optional: center horizontally
          verticalPosition: 'top', // Optional: top position
        });
      });
  }


}
