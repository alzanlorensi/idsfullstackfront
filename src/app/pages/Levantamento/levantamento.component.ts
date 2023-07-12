import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login/service/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'levantamento',
  templateUrl: './levantamento.component.html',
  styleUrls: ['./levantamento.component.scss']
})
export class LevantamentoComponent implements OnInit {
  [x: string]: any;
  constructor(private loginService: LoginService, public router: Router) { }

  ngOnInit() {
  }
  public cadastrar(): void {
    this.router.navigateByUrl('cadastro');
  }
}


