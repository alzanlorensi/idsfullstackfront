import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { AdminComponent } from './pages/admin/admin.component';
import { AdminGuard } from './services/admin.guard';
import { CadastroComponent } from './pages/Levantamento/cadastro/cadastro.component';
import { LevantamentoComponent } from './pages/Levantamento/levantamento.component';

const routes: Routes = [
    {path:'',redirectTo: 'login',pathMatch:'full'}, //redireciona para meu login
  {path: 'login', component: LoginComponent},
  {path: 'admin', component: AdminComponent,
  canActivate: [AdminGuard],
     children: []},
     {path:'cadastro',component: CadastroComponent},
     {path:'levantamento',component:LevantamentoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
