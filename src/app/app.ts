import { Component, inject, signal } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';
// import { Navbar } from './shared/components/navbar/navbar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  private router = inject(Router);
  protected readonly title = signal('masco-job-portal');
  
  showNavbar(): boolean {
    const currentUrl = this.router.url;
    return !(currentUrl.includes('/login') || currentUrl.includes('/register'));
  }
}
