import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'https://api.angular-email.com'
  constructor(private http : HttpClient) { }
  usernameAvailable(username : string){
    return this.http.post<any>(this.baseUrl + '/auth/username', {username : username});
  }
}
