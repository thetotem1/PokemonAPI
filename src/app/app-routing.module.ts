import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainPokemonComponent} from './main-pokemon/main-pokemon.component';

const routes: Routes = [
  {path: '', redirectTo: '/main-pokemon', pathMatch: 'full'},
  {path: 'main-pokemon', component: MainPokemonComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
