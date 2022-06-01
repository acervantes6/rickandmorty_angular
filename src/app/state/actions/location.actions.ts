import { createAction, props } from '@ngrx/store';

export const loadLocation = createAction(
  '[Location List] load location'
);
export const loadedLocation = createAction(
  '[Location List] loaded success', props<any>()
);
export const GETL = createAction(
  '[Location List] GET location'
);
