import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login/service/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  [x: string]: any;

  constructor(private loginService: LoginService, public router: Router) {}

  ngOnInit() {}

  public cadastrar(): void {
    this.router.navigateByUrl('cadastro');
  }
}
