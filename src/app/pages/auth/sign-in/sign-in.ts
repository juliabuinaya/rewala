import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

import { AuthService } from '../../../core/services/auth.service';
import { RoutingService } from '../../../core/services/routing.service';

import { SignUpPage } from '../sign-up/sign-up';

@IonicPage({
  name: 'sign-in'
})
@Component({
  selector: 'page-sign-in',
  templateUrl: 'sign-in.html'
})
export class SignInPage {
  
  public signInForm: FormGroup;
  private formData = {
    email: null,
    password: null
  };
  public currentPageName;
  
  constructor(public authService: AuthService,
              public routingService: RoutingService,
              private fb: FormBuilder) {
  }
  
  ionViewWillEnter() {
    this.currentPageName = this.constructor.name;
  }
  
  ngOnInit() {
    this.signInForm = this.fb.group({
      email: ['',
        [
          Validators.required,
          Validators.pattern('[A-Za-z0-9._%+-]{3,}@[a-zA-Z0-9]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})')
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
      this.formData.password = this.formData.password.trim();
      this.authService.signIn({...(this.formData)});
    }
  }
  
  toSignUpPage() {
    this.routingService.pushPage(SignUpPage);
  }

  ngOnDestroy() {
  }
}