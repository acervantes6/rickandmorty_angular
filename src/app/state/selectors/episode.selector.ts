import { createSelector } from '@ngrx/store';
import { EpisodeState } from 'src/app/core/models/episode.state';
import { AppState } from '../app.state';


export const selectEpisodeFeature = (state: AppState) => state.episodes;

export const selectListEpisodes = createSelector(
    selectEpisodeFeature,
    (state: EpisodeState) => state.episodes
);

export const selectLoadingEpi = createSelector(
    selectEpisodeFeature,
    (state: EpisodeState) => state.loading
)