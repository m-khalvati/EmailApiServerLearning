import { isNull } from '@angular/compiler/src/output/output_ast';
import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors, Validator } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class MatchPasswordService implements Validator{

  constructor() { }
  validate(control: AbstractControl): ValidationErrors | null {
    const { password, passwordConfirmation} = control.value;
    return password === passwordConfirmation ? null : { passwordDontMatch: true };
  }
}
