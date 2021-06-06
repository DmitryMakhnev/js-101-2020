import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './routing/app-routing.module';
import { AppComponent } from './app.component';
import { TodosPageComponent } from './pages/todo/todos-page/todos-page.component';
import { TodosService } from './services/todos.service';
import { AuthPageComponent } from './pages/auth/auth-page/auth-page.component';
import { AuthService } from './services/auth.service';
import { AuthZoneGuard } from './routing/auth-zone.guard';
import { UnauthZoneGuard } from './routing/unauth-zone.guard';

@NgModule({
  declarations: [
    AppComponent,
    TodosPageComponent,
    AuthPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    TodosService,
    AuthService,
    AuthZoneGuard,
    UnauthZoneGuard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
