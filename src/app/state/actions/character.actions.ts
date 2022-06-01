import { createAction, props } from '@ngrx/store';

export const loadCharacter = createAction(
  '[Character List] load character'
);

export const loadedCharacter = createAction(
  '[Character List] loaded success', props<any>()
);

export const GET = createAction(
  '[Character List] GET character'
);
