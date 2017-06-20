import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthService } from '../../../core/services/auth.service';


@IonicPage({
  name: 'sign-up'
})
@Component({
  selector: 'page-sign-up',
  templateUrl: 'sign-up.html'
})
export class SignUpPage {
  
  public signUpForm: FormGroup;
  public formData = {
    email: null,
    username: null,
    password: null
  };

  constructor(public authService: AuthService,
              private fb: FormBuilder) {
  }
  
  ngOnInit() {
    this.signUpForm = this.fb.group({
      email: ['',
        [
          Validators.required,
          Validators.pattern('[A-Za-z0-9._%+-]{3,}@[a-zA-Z0-9]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})')
        ]
      ],
      username: ['',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(24)
        ]
      ],
      password: ['',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(24)
        ]
      ]
    });
  }
  
  onSubmit(form) {
    if (form.valid) {
      this.formData.email = this.formData.email.trim();
      this.formData.username = this.formData.username.trim();
      this.formData.password = this.formData.password.trim();
      this.authService.signUp({...(this.formData)});
    }
  }
  
  ngOnDestroy() {
  }
}
