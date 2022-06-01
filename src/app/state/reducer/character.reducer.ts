import { createReducer, on } from '@ngrx/store';
import { CharacterState } from 'src/app/core/models/character.state';
import { GET, loadCharacter, loadedCharacter } from '../actions/character.actions';

export const initialState: CharacterState = {loading: false, characters: [], info: null }

export const characterReducer = createReducer(
  initialState,
  on(loadCharacter, (state ) => { 
      return {...state, loading: true  }
   }), 
   on(loadedCharacter, (state, payload) => { 
      return {...state, loading: false, ...payload }
   }),
   on(GET, (state) => { 
      return {...state, loading: false }
   })
);