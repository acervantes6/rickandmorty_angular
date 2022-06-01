import { createReducer, on } from '@ngrx/store';
import { LocationState } from 'src/app/core/models/location.state';
import { GETL, loadLocation, loadedLocation } from '../actions/location.actions';

export const initialState: LocationState = {loading: false, locations: [] }

export const locationReducer = createReducer(
  initialState,
  on(loadLocation, (state ) => { 
      return {...state, loading: true  }
   }), 
   on(loadedLocation, (state, payload) => { 
      return {...state, loading: false, ...payload }
   }),
   on(GETL, (state) => { 
      return {...state, loading: false }
   })
);