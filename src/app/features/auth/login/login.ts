import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { UiButton } from '../../../shared/components/ui-button/ui-button';

@Component({
  selector: 'app-login',
  imports: [RouterLink, FormsModule, UiButton],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  private router = inject(Router);
  loginData = { email: '', password: '' };
  handleLogin() {
    console.log('Login Submitted:', this.loginData);
     this.router.navigate(['/admin/dashboard']);
  }
  onLogin() {
    console.log('Login Submitted:', this.loginData);
    this.router.navigate(['/admin/dashboard']);
  }
}
