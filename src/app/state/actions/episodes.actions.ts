import { createAction, props } from '@ngrx/store';

export const loadEpisode = createAction(
  '[Episode List] load episode'
);
export const loadedEpisode = createAction(
  '[Episode List] loaded success', props<any>()
);
export const GETE = createAction(
  '[Episode List] GET episode'
);
