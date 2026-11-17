import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth-guard';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'login',
        pathMatch:'full'
    },
    {
        path:'login',
        loadComponent: ()=>import('./features/auth/login-component/login-component')
        .then(m => m.LoginComponent)
    },
    {
        path:'dashboard',
        canActivate:[authGuard],
        loadComponent: ()=>import('./features/dashboard/dashboard')
        .then(m => m.Dashboard)
        
    },
    {
        path:'**',
        redirectTo:'login',
        pathMatch:'full'
    },

]