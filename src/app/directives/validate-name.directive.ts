import { Directive, forwardRef } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl } from '@angular/forms';  
import { FieldsvalidationService } from '../services/fieldsvalidation.service'

@Directive({
  selector: '[appValidateName]',
  providers: [{ provide: NG_VALIDATORS, useExisting: forwardRef(() => ValidateNameDirective), multi: true }]
})
export class ValidateNameDirective implements Validator {

  constructor(private customValidator: FieldsvalidationService) { }

  validate(control: AbstractControl) : { [key: string]: any | null} {
    return this.customValidator.NameValidator()(control);
  }
}
