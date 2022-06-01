import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterDetailComponent } from './character-detail/character-detail.component';
import { CharacterListComponent } from './character-list/character-list.component';
import { EpisodesComponent } from './episodes/episodes.component';
import { LocationComponent } from './locations/location/location.component';

const routes: Routes = [
  { path: '', redirectTo: '/characters', pathMatch: 'full'  },
  { path: 'characters', component: CharacterListComponent},
  { path: 'locations', component: LocationComponent },
  { path: 'episodes', component: EpisodesComponent },
  { path: 'locations/characters/:location', component: CharacterListComponent },
  { path: 'episodes/characters/:episode', component: CharacterListComponent },
  { path: 'characters/detail/:id', component: CharacterDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
