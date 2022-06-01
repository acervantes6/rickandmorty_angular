import { ActionReducerMap } from '@ngrx/store';
import { CharacterState } from '../core/models/character.state';
import { EpisodeState } from '../core/models/episode.state';
import { LocationState } from '../core/models/location.state';
import { characterReducer } from './reducer/character.reducer';
import { episodeReducer } from './reducer/episode.reducer';
import { locationReducer } from './reducer/location.reducer';

export interface AppState {
  characters: CharacterState;
  locations: LocationState;
  episodes: EpisodeState;
}

export const ROOT_REDUCERS:ActionReducerMap<AppState> = {
    characters: characterReducer,
    locations: locationReducer,
    episodes: episodeReducer
  }
