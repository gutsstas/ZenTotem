import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';

import { LoginFormComponent } from './components/login-form/login-form.component';
import { LoginComponent } from './pages/login/login.component';

@NgModule({
  declarations: [LoginFormComponent, LoginComponent],
  imports: [CommonModule, AuthRoutingModule],
})
export class AuthModule {}
