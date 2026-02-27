import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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

  constructor(private matchPassword : MatchPasswordService, private uniqueUsername : UniqueUsernameService) { }

  get f(){
    return this.form;
  }

  onSubmit(){
  }

  ngOnInit(): void {
  }

  

}
 