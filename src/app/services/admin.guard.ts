import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { LoginService } from '../pages/login/service/login.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  private _url!: string;

  constructor(private loginService: LoginService, private router: Router) {

  }

  public get url(): string {
    return this._url;
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    this._url = state.url; //pega a url que vem e salva

    //se o token estiver nulo ele vai retornar para minha rota de login
    if (this.loginService.token===null || this.loginService.token===undefined) {
      this.router.navigateByUrl('login');
      return false;
    }
    return true;
  }

}
