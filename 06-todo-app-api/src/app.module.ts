import { Module } from '@nestjs/common';
import { AuthController } from './modules/auth/auth.controller';
import { AuthService } from './modules/auth/auth.service';
import { AuthGuard } from './modules/auth/auth.guard';
import { AuthSessionService } from './modules/auth/auth-session.service';
import { CookieSessionManagerService } from './modules/auth/cookie-session-manager.service';
import { TodosService } from './modules/todos/todos.service';
import { TodoController } from './modules/todos/todo.controller';
import { UserController } from './modules/user/user.controller';

@Module({
  imports: [],
  controllers: [
    AuthController,
    UserController,
    TodoController,
  ],
  providers: [
    AuthService,
    AuthGuard,
    AuthSessionService,
    CookieSessionManagerService,
    TodosService,
  ],
})
export class AppModule {}
