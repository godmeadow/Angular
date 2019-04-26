import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { SharedModule } from '../shared/shared.module';
import { AuthRoutingModule } from './auth.routing';
import { RegisterComponent } from './register/register.component';


@NgModule({
    imports: [SharedModule, AuthRoutingModule],
    exports: [LoginComponent],
    declarations: [LoginComponent, RegisterComponent],
    providers: [],
})
export class AuthModule { }
