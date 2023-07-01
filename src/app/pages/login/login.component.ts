import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  Form,
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
import {MatDividerModule} from '@angular/material/divider';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    NgIf,
    MatIconModule,
    MatButtonModule,
    MatDividerModule,
  ],
})
export class LoginComponent implements OnInit {
  hide = true;
  public form: FormGroup;
  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'Você deve inserir um valor';
    }
    return this.email.hasError('email') ? 'Não é um email válido' : '';
  }

  animation: any;

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
