import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from '../login.service';
import { Ilogin } from '../auth/Ilogin';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private _login:LoginService){}
  loginData: Ilogin = {
    email: '',
    password: ''
  };
  submitForm(formulario: NgForm) {
    if (formulario.valid) {
      this.loginData.email = formulario.value.email;
      this.loginData.password = formulario.value.password;
      formulario.setValue({email : "", password:""});
      //console.log(this.email,this.password);
      this._login.login(this.loginData).subscribe({
        next:(userTemp)=>{
          console.log(userTemp);
        },error: (errorTemp)=>{
          console.error(errorTemp);
        }
      })
    } else {
      console.log("Completa los campos");
    }
  }
}
