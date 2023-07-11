import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../models/usuario';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  constructor(private http: HttpClient, private router:Router) { }

  public cadastrar(usuario: Usuario){
    const api = environment.api + '/usuario/salvar';
    return this.http.post(api,usuario)
  }
}
