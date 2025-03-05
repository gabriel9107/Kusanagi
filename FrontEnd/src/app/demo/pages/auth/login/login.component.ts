// angular import
import { Component, inject, signal } from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';

// project import
import { SharedModule } from 'src/app/demo/shared/shared.module';

@Component({
  selector: 'app-login',
  imports: [SharedModule, RouterModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss', '../authentication.scss']
})
export default class LoginComponent {
  // public props
  hide = true;
  // email = new FormControl('', [Validators.required, Validators.email]);
  // Email = 'info@phoenixcoded.co';
  // password = '123456';


fb = inject(FormBuilder) 

hasError = signal(false) 
isPosting = signal(false)

  
 loginForm = this.fb.group( {
  email : ['', [Validators.required, Validators.email]], 
  password : ['', [Validators.required, Validators.maxLength(6)]], 

 });

 onSumit(){
  if(this.loginForm.invalid){
    this.hasError.set(true); 
    setTimeout(() => {
      this.hasError.set(false);
    }, 2000);
    return;
  }

  const {email, password } = this.loginForm.value; 
  console.log(email, password)
 }






// public method
  getErrorMessage() {
    // if (this.email.hasError('required')) {
    //   return 'You must enter an email';
    // }

    // return this.email.hasError('email') ? 'Not a valid email' : '';
  }
  loginType = [
    {
      image: 'assets/images/authentication/facebook.svg',
      alt: 'facebook',
      title: 'Sign In with Facebook'
    },
    {
      image: 'assets/images/authentication/twitter.svg',
      alt: 'twitter',
      title: 'Sign In with Twitter'
    },
    {
      image: 'assets/images/authentication/google.svg',
      alt: 'google',
      title: 'Sign In with Google'
    }
  ];
}
