import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface SignupCredentials {
  username : string;
  password : string;
  passwordConfirmation : string;
}

export interface SignupResponse {
  username : string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'https://api.angular-email.com'
  constructor(private http : HttpClient) { }

  usernameAvailable(username : string){
    return this.http.post<any>(this.baseUrl + '/auth/username', {username : username});
  }
  
  
  signup(values : SignupCredentials){
    return this.http.post<SignupResponse>(this.baseUrl + '/auth/signup', values);
  }

}