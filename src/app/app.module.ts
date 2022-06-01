import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './search/search.component';
import { CharacterListComponent } from './character-list/character-list.component';
import { LocationComponent } from './locations/location/location.component';
import { EpisodesComponent } from './episodes/episodes.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CharacterDetailComponent } from './character-detail/character-detail.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { ROOT_REDUCERS } from './state/app.state';
import { EffectsModule } from '@ngrx/effects';
import { CharactersEffects } from './state/effects/character.effects';
import { LocationsEffects } from './state/effects/location.effects';
import { EpisodesEffects } from './state/effects/episode.effects';
import { FilterPipe } from './Pipes/filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchComponent,
    CharacterListComponent,
    LocationComponent,
    EpisodesComponent,
    CharacterDetailComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule,
    ReactiveFormsModule, 
    FormsModule,
    StoreModule.forRoot(ROOT_REDUCERS),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([CharactersEffects, LocationsEffects, EpisodesEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
