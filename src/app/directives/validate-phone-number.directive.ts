import { Directive, forwardRef } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl } from '@angular/forms';  
import { FieldsvalidationService } from '../services/fieldsvalidation.service'

@Directive({
  selector: '[appValidatePhoneNumber]',
  providers: [{ provide: NG_VALIDATORS, useExisting: forwardRef(() => ValidatePhoneNumberDirective), multi: true }]
})
export class ValidatePhoneNumberDirective implements Validator {

  constructor(private customValidator: FieldsvalidationService) { }

  validate(control: AbstractControl) : { [key: string]: any | null} {
    return this.customValidator.PhoneNumberValidator()(control);
  }
}
