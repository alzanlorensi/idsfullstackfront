import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../../login/service/login.service';
import { Router } from '@angular/router';
import { CadastroService } from './service/cadastro.service';

@Component({
  selector: 'cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss'],
})
export class CadastroComponent implements OnInit {
submit() {
throw new Error('Method not implemented.');
}
  public hide = true;
  public formCadastro: FormGroup;
  public loading: Boolean = false; //para não se cadastrar ao mesmo tempo
  public mensagemerro: any = null;

  constructor(
    private formBuilder: FormBuilder,
    private cadastoService: CadastroService,
    private router: Router
  ) {
    this.formCadastro = this.montarForm();
  }

  ngOnInit(): void {}

  public montarForm(): FormGroup {
    return this.formBuilder.group({
      nome: [null, Validators.required], //null e necessita ser preenchido
      usuarioEmail: [
        null,
        Validators.compose([Validators.required, Validators.email]),
      ],
      usuarioSenha: [null, Validators.required],
    });
  }

  public get nome() {
    return this.formCadastro.get('nome');
  }

  public get usuarioEmail() {
    return this.formCadastro.get('usuarioEmail');
  }

  public get usuarioSenha() {
    return this.formCadastro.get('usuarioSenha');
  }

  public cadastrarUsuario(){
    const usuario = this.formCadastro.getRawValue();
    this.loading = true;
    this.cadastoService.cadastrar(usuario).subscribe(() => (
     this.router.navigateByUrl('login')
    ));
  }

}
