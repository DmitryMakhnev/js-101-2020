import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.scss']
})
export class AuthPageComponent {

  constructor(
    private authService: AuthService,
    private router: Router,
  ) { }

  login: string = '';
  password: string = '';
  hasError: boolean = false;

  tryLogin() {
    this.authService
      .tryLogin(
        this.login,
        this.password
      )
      .then(
        () => {
          this.router.navigateByUrl('/');
        },
        () => {
          this.hasError = true;
        }
      );
  }

}
