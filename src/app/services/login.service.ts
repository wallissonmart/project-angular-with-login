import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/UserModel';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private apiUrL = 'https://api.trakto.io';

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<User> {
    return this.http.post<User>(`${this.apiUrL}/auth/signin`, {
      email,
      password,
    });
  }
}
