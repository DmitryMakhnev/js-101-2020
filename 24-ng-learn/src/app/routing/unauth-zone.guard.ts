import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable()
export class UnauthZoneGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<boolean | UrlTree> {
    return this.authService
      .checkAuth()
      .then(
        isLoggedIn => !isLoggedIn || this.router.parseUrl('/')
      );
  }

}
