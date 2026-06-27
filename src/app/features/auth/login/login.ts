import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [RouterLink, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  private router = inject(Router);
  loginData = { email: '', password: '' };

  onLogin() {
    console.log('Login Submitted:', this.loginData);
    this.router.navigate(['/admin/dashboard']);
  }
}
