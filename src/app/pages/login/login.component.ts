import { Component, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public form: FormGroup;

  constructor() {
    this.form = this.criarForm();
  }

  ngOnInit(): void {}

  public criarForm(): FormGroup {
    return new FormGroup({
      email: new FormControl(),
      senha: new FormControl(),
    });
  }
}
