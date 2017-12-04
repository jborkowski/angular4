import { AbstractControl, ValidationErrors } from "@angular/forms";

export class PasswordValidators {
  static isOldPassValid(control: AbstractControl) : Promise<ValidationErrors | null> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (control.value !== '1234')
                resolve({ isOldPasswordValid: true });
            else 
                resolve(null);
        }, 1000);
      }); 
  }

  static passwordShouldMatch(control: AbstractControl) {
      let newPassword = control.get('newPassword');
      let confirmPassword = control.get('confirmPassword');

      console.log(newPassword);

      if( newPassword.value != confirmPassword.value )
        return { passwordDoesntMatch: true };
    
      return null;
  }
}