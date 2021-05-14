import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodosPageComponent } from '../pages/todo/todos-page/todos-page.component';
import { AuthPageComponent } from '../pages/auth/auth-page/auth-page.component';
import { AuthZoneGuard } from './auth-zone.guard';
import { UnauthZoneGuard } from './unauth-zone.guard';

const routes: Routes = [
  { path: '', component: TodosPageComponent, canActivate: [ AuthZoneGuard ] },
  { path: 'auth', component: AuthPageComponent, canActivate: [ UnauthZoneGuard ] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
