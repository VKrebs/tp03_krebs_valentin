import { Injectable } from '@angular/core';
import { ValidatorFn, AbstractControl } from '@angular/forms';
import { FormGroup } from '@angular/forms'

@Injectable({
  providedIn: 'root'
})
export class FieldsvalidationService {

  PasswordPatternValidator(): ValidatorFn {
    return (control: AbstractControl) : { [key: string ]: any } => {
      if (!control.value)
      {
        return null;
      }
      const regex = new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$');
      const valid = regex.test(control.value);
      return valid ? null : { invalidPassword: true };
    }
  }

  MatchPassword(password:string, confirmPassword:string){
    return (formGroup:FormGroup) => {
      const passwordControl = formGroup.controls[password];
      const confirmPasswordControl = formGroup.controls[confirmPassword];

      if (!passwordControl || !confirmPasswordControl)
      {
        return null;
      }

      if (confirmPasswordControl.errors && !confirmPasswordControl.errors.passwordMissmatch)  {
        return null;
      }

      if (passwordControl.value !== confirmPasswordControl.value) {
        confirmPasswordControl.setErrors({passwordMissmatch: true});
      } else {
        confirmPasswordControl.setErrors(null);
      }
    }
  }

  NameValidator() : ValidatorFn {
    return (control: AbstractControl) : { [key: string]: any } => {
      if (!control.value)
      {
        return null;
      }

      let hasError:boolean = false;
      let errors = {};

      // Checking Name Format
      const regex = new RegExp('^[A-Za-zèé_-]*$');
      if (!regex.test(control.value))
      {
        errors["invalidName"] = hasError = true;
      }

      return !hasError ? null : errors;
    } 
  }

  UsernameValidator() : ValidatorFn {
    return (control: AbstractControl) : { [key: string]: any } => {
      if (!control.value)
      {
        return null;
      }

      let hasError:boolean = false;
      let errors = {};

      // Checking Name Format
      const regex = new RegExp('^[a-zA-Z0-9_-]{3,15}$');
      if (!regex.test(control.value))
      {
        errors["invalidUsername"] = hasError = true;
      }

      return !hasError ? null : errors;
    } 
  }

  PhoneNumberValidator() : ValidatorFn {
    return (control: AbstractControl) : { [key: string]: any } => {
      if (!control.value)
      {
        return null;
      }

      let cleaned = control.value.replace(/\s/g, '');

      let hasError:boolean = false;
      let errors = {};

      // Checking Name Format
      const regex = new RegExp('^\\+[0-9\s]{11,13}$');
      if (!regex.test(cleaned))
      {
        errors["invalidPhoneNumber"] = hasError = true;
      }

      return !hasError ? null : errors;
    } 
  }

  constructor() { }
}
