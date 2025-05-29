import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
  standalone: false
 
})
export class AuthComponent {
  user: any = { username: '', password: '' };
  isLoginMode = true;
  message = '';

  constructor(private authService: AuthService,private router: Router) {}

 
  onSubmit() {
    if (this.isLoginMode) {
      this.authService.login(this.user).subscribe(
        (res) => {
          this.message = res;
          if (res === 'Login successful') {
            this.router.navigate(['/home']);  // ✅ Navigate on success
          }
        },
        (err) => this.message = 'Login failed'
      );
    } else {
      this.authService.register(this.user).subscribe(
        (res) => this.message = res,
        (err) => this.message = 'Registration failed'
      );
    }
  }

  toggleMode() {
    this.isLoginMode = !this.isLoginMode;
    this.message = '';
    this.user = { username: '', password: '' }; // reset form
  }
}
