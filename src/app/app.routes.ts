import { Routes } from '@angular/router';
import { LandingComponent } from './routing/landing/landing.component';
import { SignupComponent } from './routing/signup/signup.component';
import { LoginComponent } from './routing/login/login.component';
import { ErrorComponent } from './routing/error/error.component';
import { ForgotPasswordComponent } from './routing/forgot-password/forgot-password.component';

export const routes: Routes = [
    {
        path: '',
        component: LandingComponent,
        pathMatch: 'full'
    },
    {
        path: 'signup',
        component: SignupComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'fp', 
        component: ForgotPasswordComponent
    },
    {
        path: '**',
        component: ErrorComponent
    }
];
