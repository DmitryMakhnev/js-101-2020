import { Injectable } from '@nestjs/common';
import { Request, Response } from 'express';

const SESSION_COOKIE_KEY = '__polis-todo-app-session__';

@Injectable()
export class CookieSessionManagerService {

  async storeSession(response: Response, sessionToken: string) {
    response.cookie(SESSION_COOKIE_KEY, sessionToken);
  }

  async extractSessionToken(request: Request): Promise<string|undefined> {
    return request.cookies[SESSION_COOKIE_KEY];
  }

  async clearSession(response: Response) {
    response.clearCookie(SESSION_COOKIE_KEY);
  }

}
