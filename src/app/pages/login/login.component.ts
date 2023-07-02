import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  Form,
  FormBuilder,
  Validators,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { LoginService } from './service/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public hide = true;
  public form: FormGroup;
  public animation: any;
  public mensagemerro: any = null;

  constructor(public formBuilder: FormBuilder, public service: LoginService, public router: Router) {
    this.form = this.criarForm();
  }

  ngOnInit(): void {
    this.service.verificar_token(); //se existir token vai limpar
  }

  public criarForm(): FormGroup {
    return this.formBuilder.group({
      user_email: [
        null,
        Validators.compose([Validators.required, Validators.email]),
      ],
      user_password: [null],
    });
  }
  public get email() {
    return this.form.get('user_email');
  }

  public submit() {
    this.service.logar(this.form.getRawValue()).subscribe(
      (response) => {
        this.mensagemerro = null;
        this.router.navigateByUrl("admin"); // irá para o componente Admin
      },
      (error) => {
        this.mensagemerro = 'Erro 404 not found' + error;
      }
    );
  }
}
