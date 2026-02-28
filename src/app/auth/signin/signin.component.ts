import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  form = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
    password: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(20)]),
  });

  constructor(private authService : AuthService,
    private router : Router
  ) { }

  get f() {
    return this.form;
  }

  onSubmit() {
    if(this.form.invalid){
      this.form.markAllAsTouched();
      return;
    }
    this.authService.signin(this.form.value).subscribe((res) => {
      this.router.navigate(['/inbox'])
    },
    (error : any) => {
      console.log(error.error);
      if(error.status == 0){
        this.form.setErrors({noConnection : true});
        return;
      }
      if(error.error.username || error.error.password){
        this.form.setErrors({credential : true});
        return;
      }
    }
    );

  }

  ngOnInit(): void {
  }

  showErrorPasswordDontMatch(){
    return this.form.controls.password.dirty &&
    this.form.controls.password.touched &&
    this.form.controls.username.dirty &&
    this.form.controls.username.touched
  };

}
