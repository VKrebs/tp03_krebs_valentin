import { Directive, forwardRef } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl } from '@angular/forms';  
import { FieldsvalidationService } from '../services/fieldsvalidation.service'

@Directive({
  selector: '[appValidateUsername]',
  providers: [{ provide: NG_VALIDATORS, useExisting: forwardRef(() => ValidateUsernameDirective), multi: true }]
})
export class ValidateUsernameDirective implements Validator {

  constructor(private customValidator: FieldsvalidationService) { }

  validate(control: AbstractControl) : { [key: string]: any | null} {
    return this.customValidator.UsernameValidator()(control);
  }
}
