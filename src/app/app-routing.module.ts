import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { AdminComponent } from './pages/admin/admin.component';
import { AdminGuard } from './services/admin.guard';

const routes: Routes = [
    {path:'',redirectTo: 'login',pathMatch:'full'}, //redireciona para meu login
  {path: 'login', component: LoginComponent},
  {path: 'admin', component: AdminComponent,
  canActivate: [AdminGuard],
     children: []},
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
