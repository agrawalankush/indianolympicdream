import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { LoadInterceptor } from './load-interceptor';
/** Http interceptor providers in outside-in order */
export const httpInterceptorProviders = [
    { provide: HTTP_INTERCEPTORS, useClass: LoadInterceptor, multi: true },
];
