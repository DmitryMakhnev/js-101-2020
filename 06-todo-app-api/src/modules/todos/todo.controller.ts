import { Body, Controller, Delete, Get, HttpException, HttpStatus, Patch, Post, Req, UseGuards } from '@nestjs/common';
import { Request } from 'express';

import { TodosService } from './todos.service';
import { AuthGuard, REQUEST_USER_KEY } from '../auth/auth.guard';
import { UserModel } from '../user/user.model';
import { CreateTodoDto } from './dtos/create-todo.dto';
import { UpdateTodoDto } from './dtos/update-todo.dto';
import { DeleteTodoDto } from './dtos/delete-todo.dto';

@Controller('todos')
@UseGuards(AuthGuard)
export class TodoController {
  constructor(
    private todosService: TodosService,
  ) {}

  @Get()
  getAll(
    @Req() request: Request,
  ) {
    const user: UserModel = request[REQUEST_USER_KEY];
    return this.todosService.getAll(user.id);
  }

  @Post()
  addNew(
    @Req() request: Request,
    @Body() todoCreationData: CreateTodoDto,
  ) {
    const user: UserModel = request[REQUEST_USER_KEY];
    return this.todosService.create(user.id, todoCreationData);
  }

  @Patch()
  update(
    @Req() request: Request,
    @Body() todoUpdateData: UpdateTodoDto,
  ) {
    const user: UserModel = request[REQUEST_USER_KEY];
    try {
      return this.todosService.update(user.id, todoUpdateData);
    } catch (e) {
      throw new HttpException(
        'Item not found',
        HttpStatus.NOT_FOUND
      );
    }
  }

  @Delete()
  async delete(
    @Req() request: Request,
    @Body() todoDeleteData: DeleteTodoDto,
  ) {
    const user: UserModel = request[REQUEST_USER_KEY];
    try {
      await this.todosService.delete(user.id, todoDeleteData);
      return {};
    } catch (e) {
      throw new HttpException(
        'Item not found',
        HttpStatus.NOT_FOUND
      );
    }
  }


}
