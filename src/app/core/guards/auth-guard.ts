import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LoginService } from '../../features/auth/login.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService =inject(LoginService);
  const  router = inject(Router);
  if (authService.isloggedIn()) {
    return true;
  } 
   return router.createUrlTree(['/login'], {
    queryParams: { returnUrl: state.url }
  });
};
