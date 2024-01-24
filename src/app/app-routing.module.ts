import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CharactersComponent } from './characters/characters.component';

const routes: Routes = [
  {
    //Cuando lleguemos al home nos redirige a la ruta para mostrar todos los characters
    path:'', redirectTo: '/characters', pathMatch: 'full'
  },
  {
    path:'characters', component: CharactersComponent
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
