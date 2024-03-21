import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { InterceptorService } from './interceptor.service';
import { ErrorInterceptorService } from './error-interceptor.service';
import { InicioComponent } from './inicio/inicio.component';
import { MenuComponent } from './menu/menu.component';
import { ServicioComponent } from './servicio/servicio.component';
import { HorariorComponent } from './horarior/horarior.component';
import { NosotrosComponent } from './nosotros/nosotros.component';

  const appRoutes:Routes=[
    {path:'',component:InicioComponent},
    {path:'Inicio',component:InicioComponent},
    {path:'Login',component:LoginComponent},
    {path:'Horarios',component:HorariorComponent},
    {path:'Menu',component:MenuComponent},
    {path:'Servicio',component:ServicioComponent},
    {path:'Nosotros',component:NosotrosComponent}
  ]
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    InicioComponent,
    MenuComponent,
    ServicioComponent,
    HorariorComponent,
    NosotrosComponent
  ],
  imports: [
    BrowserModule,FormsModule,AppRoutingModule,RouterModule.forRoot(appRoutes),HttpClientModule
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS,useClass:InterceptorService,multi:true},
    {provide:HTTP_INTERCEPTORS,useClass:ErrorInterceptorService,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
