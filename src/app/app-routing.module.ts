import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CharactersComponent } from './characters/characters.component';
import { CharacterComponent } from './characters/character/character.component';
import { BitacoraComponent } from './characters/bitacora/bitacora.component';

const routes: Routes = [
  { path:'characters', component: CharactersComponent },
  { path:'characters/character/:id', component: CharacterComponent },
  { path:'characters/bitacora', component: BitacoraComponent },
  { path:'', redirectTo: '/characters', pathMatch: 'full' },
  { path:'**', redirectTo: '/characters', pathMatch: 'full' },
  { path:'***', redirectTo: '/characters', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
