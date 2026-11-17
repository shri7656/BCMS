import { HttpInterceptorFn } from '@angular/common/http';
import { loadingService } from '../services/loading.service';
import { inject } from '@angular/core';
import { finalize } from 'rxjs';

export const commonInterceptor: HttpInterceptorFn = (req, next) => {
  const LoadingService = inject(loadingService);
                                                    
  LoadingService.show();

  return next(req).pipe(
    finalize(() => {
      LoadingService.hide();
    })
  );
};
