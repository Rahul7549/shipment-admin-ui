import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { AuthServiceService } from '../modules/admin-auth/service/auth-service.service'; 
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthServiceService);
  const router = inject(Router);
  const snackBar = inject(MatSnackBar);

  // Check if the user is authenticated
  if (!authService.isAuthenticated()){
    snackBar.open('You must be logged in to access this page.', 'Close', {
      duration: 3000, // Duration in milliseconds
      horizontalPosition: 'center', // Optional: center horizontally
      verticalPosition: 'top', // Optional: top position
    });
    // If not authenticated, redirect to the login page
    router.navigate(['']); // Adjust to your login route
    return false;
  }
  // Allow access to the route
  return true;
};

