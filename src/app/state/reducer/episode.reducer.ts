import { createReducer, on } from '@ngrx/store';
import { EpisodeState } from 'src/app/core/models/episode.state';
import { GETE, loadedEpisode } from '../actions/episodes.actions';



export const initialState: EpisodeState = {loading: false, episodes: [] }

export const episodeReducer = createReducer(
  initialState,
  on(loadedEpisode, (state ) => { 
      return {...state, loading: true  }
   }), 
   on(loadedEpisode, (state, payload) => { 
      return {...state, loading: false, ...payload }
   }),
   on(GETE, (state) => { 
      return {...state, loading: false }
   })
);