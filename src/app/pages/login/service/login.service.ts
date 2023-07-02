import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { UsuarioLogin } from '../models/usuario-login';
import { map } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public api: string;
  public token: any;

  constructor(public httpClient: HttpClient, private router: Router) {
    this.api = environment.api + '/login';
    this.token = localStorage.getItem('token');
  }

  public logar(usuario_login: UsuarioLogin){
    const url = this.api+'/auth';
    return this.httpClient.post(url,usuario_login).pipe(map((response: any) => {
      console.log(response);
      this.token = response.token;
      localStorage.setItem('token', response.token);
      return response;
    }));
  }

  public logout(){
    localStorage.removeItem('token');
    this.router.navigateByUrl('login'); //chama do service
    this.token=null;
  }

  public verificar_token(){
    if(localStorage.getItem('token') !== undefined){
      localStorage.removeItem('token');
      this.token = null;
    }
  }
}
