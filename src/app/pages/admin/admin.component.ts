import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login/service/login.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(
    private loginService: LoginService,
  ) { }

  ngOnInit() {
  }

}
