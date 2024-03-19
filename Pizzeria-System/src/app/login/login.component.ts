import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email = "";
  password ="";
  submitForm(formulario: NgForm) {
    if (formulario.valid) {
      this.email = formulario.value.email;
      this.password = formulario.value.password;
      formulario.setValue({email : "", password:""});
      console.log(this.email,this.password);
    } else {
      console.log("Completa los campos");
    }
  }
}
