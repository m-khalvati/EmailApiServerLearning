import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { catchError, filter, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UniqueUsernameService implements AsyncValidator{
  private baseUrl = 'https://api.angular-email.com'
  constructor(private http: HttpClient) { }
  validate(control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    return this.http.post<any>(this.baseUrl + '/auth/username',{username : control.value}).pipe(
        filter((response) => response.available),
        map((response) => {
          return null;
        }),
        catchError((error) => {
          if (error.error.username)
            return of({nonUniqueUsername : true});
          else
            return of({unknownError : true})
        })
    );
  }

}
