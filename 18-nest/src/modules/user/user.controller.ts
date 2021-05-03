import { Controller, Get, Param } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('/users')
export class UserController {

  constructor(
    private userService: UserService,
  ) {}

  @Get(':id')
  getUserById(
    @Param() params
  ) {
    return this.userService.getUserById(params.id as string);
  }

}
