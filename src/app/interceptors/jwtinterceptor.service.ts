import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JwtinterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let currentUser = { token: "" }
    let header = new HttpHeaders();
    header.set('Authorization', 'Bearer ');

    if (sessionStorage.currentUser != null) {
      currentUser = JSON.parse(sessionStorage.currentUser);
      header = header.set("Authorization", "Bearer " + currentUser.token);
    }
    req = req.clone({
      setHeaders: {
        Authorization: "Bearer " + currentUser.token
      }
    });

    return next.handle(req);
  }
}