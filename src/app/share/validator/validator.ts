import { AbstractControl, ValidatorFn } from '@angular/forms';

export function passwordsMatchValidator(passwordControl: AbstractControl): ValidatorFn {
  return (confirmPasswordControl: AbstractControl): { [key: string]: boolean } | null => {
    if (!confirmPasswordControl.value || !passwordControl.value) {
      return null; // Return null if either field is not filled yet
    }
    if (confirmPasswordControl.value !== passwordControl.value) {
      return { 'passwordMismatch': true }; // If passwords do not match
    }
    return null; // Passwords match
  };
}