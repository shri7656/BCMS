import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_ENDPOINTS } from '../../core/endpoints/endpoint';

export interface LoginResponse {
  message: string;
  token: string | null;
}

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private readonly TOKEN_KEY = 'bcms_token';
  private readonly AUTHENTICATED_KEY = 'bcms_authenticated';

  constructor(private readonly http: HttpClient) {}

  login(email: string, password: string): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(
      API_ENDPOINTS.auth.login,
      { email, password }
    );
  }

  isloggedIn(): boolean {
    return (
      sessionStorage.getItem(this.AUTHENTICATED_KEY) === 'true' ||
      !!sessionStorage.getItem(this.TOKEN_KEY)
    );
  }

  setAuthenticatedSession(token: string | null): void {
    sessionStorage.setItem(this.AUTHENTICATED_KEY, 'true');
    if (token) {
      sessionStorage.setItem(this.TOKEN_KEY, token);
    } else {
      sessionStorage.removeItem(this.TOKEN_KEY);
    }
  }

  getToken(): string | null {
    return sessionStorage.getItem(this.TOKEN_KEY);
  }

  logout(): void {
    sessionStorage.removeItem(this.TOKEN_KEY);
    sessionStorage.removeItem(this.AUTHENTICATED_KEY);
  }
}
