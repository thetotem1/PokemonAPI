import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainHttpComponent} from './main-http/main-http.component';

const routes: Routes = [
  {path: '', redirectTo: '/main-http', pathMatch: 'full'},
  {path: 'main-http', component: MainHttpComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
