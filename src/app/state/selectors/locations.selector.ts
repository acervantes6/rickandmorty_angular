import { createSelector } from '@ngrx/store';
import { LocationState } from 'src/app/core/models/location.state';
import { AppState } from '../app.state';


export const selectLocationFeature = (state: AppState) => state.locations;

export const selectListLocations = createSelector(
    selectLocationFeature,
    (state: LocationState) => state.locations
);

export const selectLoadingLoc = createSelector(
    selectLocationFeature,
    (state: LocationState) => state.loading
)