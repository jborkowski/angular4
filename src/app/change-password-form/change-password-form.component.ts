import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, ValidationErrors } from '@angular/forms';
import { PasswordValidators } from './password.validator';

@Component({
  selector: 'change-password-form',
  templateUrl: './change-password-form.component.html',
  styleUrls: ['./change-password-form.component.css']
})
export class ChangePasswordFormComponent {
  form;

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      oldPassword: ['', Validators.required, PasswordValidators.isOldPassValid ],
      newPassword: ['', Validators.required],
      confirmPassword: ['', [Validators.required]]
    }, {
      validator: PasswordValidators.passwordShouldMatch
    })
  }

  get confirmPassword() {
    return this.form.get('confirmPassword');
  }

  get oldPassword() {
    return this.form.get('oldPassword');
  }

  get newPassword() {
    return this.form.get('newPassword');
  }
}
