import { Directive } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl } from '@angular/forms';
import { FieldsvalidationService } from '../services/fieldsvalidation.service'

@Directive({
  selector: '[appPasswordPattern]',
  providers: [{ provide: NG_VALIDATORS, useExisting: PasswordPatternDirective, multi: true}]
})
export class PasswordPatternDirective implements Validator {

  constructor(private customValidator: FieldsvalidationService) { }

  validate(control: AbstractControl): { [key: string]: any | null} {
    return this.customValidator.PasswordPatternValidator()(control);
  }
}
