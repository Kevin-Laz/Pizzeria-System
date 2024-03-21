import { Injectable } from '@angular/core';
import { LoginService } from './login.service';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor{

  constructor(private _loginService:LoginService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let token:String = this._loginService.getToken();
    if(token!=""){
      req = req.clone({
        setHeaders:{
          'Content-Type':'application/json;charset=utf-8',
          'Accept':'application/json',
          'Authorization':`Bearer ${token}`,
        },
      })
    }
    return next.handle(req);
  }
}
