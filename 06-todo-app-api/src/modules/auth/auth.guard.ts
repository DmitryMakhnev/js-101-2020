import { CanActivate, ExecutionContext, HttpException, HttpStatus, Injectable } from '@nestjs/common';

import { CookieSessionManagerService } from './cookie-session-manager.service';
import { AuthSessionService } from './auth-session.service';

export const REQUEST_USER_KEY = Symbol('authorized user');

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private cookieSessionManagerService: CookieSessionManagerService,
    private authSessionService: AuthSessionService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const sessionToken = await this.cookieSessionManagerService.extractSessionToken(request);

    if (!sessionToken) {
      throw new HttpException(
        'No active session',
        HttpStatus.UNAUTHORIZED
      );
    }

    const user = await this.authSessionService.verify(sessionToken);
    if (!user) {
      const response = context.switchToHttp().getResponse();
      await this.cookieSessionManagerService.clearSession(response);

      throw new HttpException(
        'Session outdated',
        HttpStatus.UNAUTHORIZED
      );
    }

    request[REQUEST_USER_KEY] = user;

    return true;
  }

}
