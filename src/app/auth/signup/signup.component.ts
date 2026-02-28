import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/_services/auth.service';
import { MatchPasswordService } from 'src/app/_validators/match-password.service';
import { UniqueUsernameService } from 'src/app/_validators/unique-username.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  form = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)], [this.uniqueUsername.validate.bind(this.uniqueUsername)]),
    password: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(20)]),
    passwordConfirmation: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(20)]),
  }, {
    validators : [this.matchPassword.validate]
  });

  constructor(private matchPassword : MatchPasswordService,
     private uniqueUsername : UniqueUsernameService,
     private authService : AuthService,
     private router : Router) { }

  get f(){
    return this.form;
  }

  onSubmit(){
    if(this.form.invalid){
      this.form.markAllAsTouched();
      return;
    }
    this.authService.signup(this.form.value).subscribe(
      (response) => {
        this.router.navigate(['/inbox'])
    }, 
    (error) => {
      if(error.status == 0)
        this.form.setErrors({noConnection : true});
      else
        this.form.setErrors({unknownError : true});
    })
  }

  showErrorPasswordDontMatch(){
    return this.form.controls.password.dirty &&
    this.form.controls.password.touched &&
    this.form.controls.passwordConfirmation.dirty &&
    this.form.controls.passwordConfirmation.touched 

  }

  ngOnInit(): void {
  }

  

}
 