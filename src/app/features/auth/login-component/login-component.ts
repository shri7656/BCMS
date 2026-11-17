import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import {  LoginService } from '../login.service';

@Component({
  selector: 'app-login-component',
  imports: [FormsModule, RouterLink],
  templateUrl: './login-component.html',
  styleUrl: './login-component.scss',
})
export class LoginComponent implements OnInit {
  loginService = inject(LoginService);
  router = inject(Router);
  email = '';
  password = '';
  rememberMe = false;
  showPassword = false;
  errorMessage: string | null = null;

  ngOnInit() {
    this.loginService.logout();
    
  }

  togglePassword(): void {
    this.showPassword = !this.showPassword;
  }

  onLogin() {
    this.loginService.login(this.email, this.password)
      .subscribe({
        next: (response) => {
          this.loginService.setAuthenticatedSession(response.token);
          this.router.navigate(['/dashboard']);
        },
        error: () => {
          this.errorMessage = 'Something went wrong';
        }
      });
  }
}
