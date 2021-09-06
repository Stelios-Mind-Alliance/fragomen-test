import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AllUser } from '../models/all-user.model';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _isLoggedIn$ = new BehaviorSubject<boolean>(false);
  private readonly TOKEN_NAME = 'name_auth';
  isLoggedIn$ = this._isLoggedIn$.asObservable();
  user!: AllUser;

  get token(): any {
    return localStorage.getItem(this.TOKEN_NAME);
  }

  constructor(private apiService: ApiService) {
    this._isLoggedIn$.next(!!this.token);
    this.user = this.getUser(this.token);
  }

  login(username: string, password: string) {
    return this.apiService.login(username, password).pipe(
      tap((response: any) => {
        this._isLoggedIn$.next(true);
        localStorage.setItem(this.TOKEN_NAME, response.token);
        this.user = this.getUser(response.token);
      })
    );
  }

  private getUser(token: string): AllUser {
    return JSON.parse(atob(token.split('.')[1])) as AllUser;
  }
}
