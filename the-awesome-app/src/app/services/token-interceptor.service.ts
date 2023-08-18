import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from './user-service';
import { environment } from 'src/environments/environment';

// @Injectable({
//   providedIn: 'root'
// })
@Injectable()
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private userService: UserService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const accessToken = this.userService.getAccessToken();
    const url = environment.secureProductsUrl;
    if (accessToken && req.url.startsWith(url)) {
      return next.handle(req.clone({ setHeaders: { Authorization: `Bearer ${accessToken}` } }));
    }

    // send for further processing
    return next.handle(req);
  }
}
