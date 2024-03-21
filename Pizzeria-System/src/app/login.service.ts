import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, catchError, map, tap, throwError } from 'rxjs';
import { environment } from 'src/environment/environment';
import { user } from './auth/user';
import { Ilogin } from './auth/Ilogin';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  currentUserLoginOn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  currentUserData: BehaviorSubject<String> = new BehaviorSubject<String>("");
  constructor(private http:HttpClient) {
    this.currentUserLoginOn = new BehaviorSubject<boolean>(sessionStorage.getItem("token")!=null);
    this.currentUserData = new BehaviorSubject<String>(sessionStorage.getItem("token")||"");
  }
  //login
  login(credentials:Ilogin):Observable<user>{
    return this.http.post<any>(environment.urlHost+"auth/login",credentials).pipe(
      tap((userTemp)=>{
        sessionStorage.setItem("token",userTemp.jwt);
        this.currentUserData.next(userTemp);
        this.currentUserLoginOn.next(true);
      }
    ),
    map((usertemp)=>usertemp.jwt),
    catchError(this.handleError)
    );
  }
  //logout
  logout():void{
    sessionStorage.removeItem("token");
    this.currentUserLoginOn.next(false);
  }
  //Acceso token
  getToken():String{
    return this.currentUserData.value;
  }
  //Manejo de error http
  private handleError(error:HttpErrorResponse){
    if(error.status ===0){
      console.error("Error: " , error.error);
    }
    else{
      console.error("Backend retorno el codigo de estado ", error.status, error.error)
    }
    return throwError(()=> new Error('Algo sucedio'));
  }
}
