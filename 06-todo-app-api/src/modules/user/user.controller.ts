import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { Request } from 'express';

import { AuthGuard, REQUEST_USER_KEY } from '../auth/auth.guard';
import { createSuccessResponse } from '../responses/create-success-response';

@Controller('user')
@UseGuards(AuthGuard)
export class UserController {

  @Get()
  get(
    @Req() request: Request,
  ) {
    return createSuccessResponse(request[REQUEST_USER_KEY]);
  }

}
