import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'any'
})
export class LoginService {
  //private url = 'https://localhost:5101/User/login';
  //private url = ;

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<string> {
    return this.http.post('https://studysphereapi.azurewebsites.net/User/login', { username, password }, { responseType: 'text' });
  }
  
}
