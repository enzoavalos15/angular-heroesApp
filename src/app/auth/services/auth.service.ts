import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Auth } from '../interfaces/auth.interface';
import { tap, Observable, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private urlusuario: string = environment.apiUrl + '/usuarios';
  private usuarioActive: Auth | undefined;

  get usuario() {
    return { ...this.usuarioActive! };
  }

  constructor(private http: HttpClient) {}

  verifyAuthentication(): Observable<boolean> {
    if (!localStorage.getItem('token')) {
      return of(false);
    }
    return this.http.get<Auth>(`${this.urlusuario}/1`).pipe(
      map((auth) => {
        this.usuarioActive = auth;
        return true;
      })
    );
  }

  login() {
    return this.http.get<Auth>(`${this.urlusuario}/1`).pipe(
      tap((user) => (this.usuarioActive = user)),
      tap((user) => localStorage.setItem('token', user.id))
    );
  }

  logout() {
    localStorage.removeItem('token');
  }
}
