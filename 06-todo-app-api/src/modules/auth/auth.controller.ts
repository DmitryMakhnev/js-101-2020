import { Body, Controller, HttpException, HttpStatus, Post, Res, UseGuards } from '@nestjs/common';
import { Response } from 'express';

import { LoginCredentials } from './login-credentials';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { AuthSessionService } from './auth-session.service';
import { CookieSessionManagerService } from './cookie-session-manager.service';
import { createSuccessResponse } from '../responses/create-success-response';


@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private authSessionService: AuthSessionService,
    private cookieSessionManagerService: CookieSessionManagerService,
  ) {}

  @Post('login')
  async login(
    @Res({ passthrough: true }) response: Response,
    @Body() cred: LoginCredentials,
  ) {
    const user = await this.authService.authByLoginAndPassword(cred);

    if (!user) {
      throw new HttpException(
        `Can't authorize user`,
        HttpStatus.UNAUTHORIZED
      );
    }

    const sessionToken = await this.authSessionService.register(user);
    await this.cookieSessionManagerService.storeSession(response, sessionToken);

    return createSuccessResponse(user);
  }

  @Post('logout')
  @UseGuards(AuthGuard)
  async logout(
    @Res({ passthrough: true }) response: Response,
  ) {
    await this.cookieSessionManagerService.clearSession(response);

    return createSuccessResponse();
  }
}
