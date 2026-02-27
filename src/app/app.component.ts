import { Component } from '@angular/core';
import { AuthService } from './_services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EmailApiServerLearning';
  constructor(private authService : AuthService){
    this.authService.checkAuth().subscribe((response) => {
      //console.log(response);
    });
  }
}
