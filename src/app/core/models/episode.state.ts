import { EpisodeModel } from "./episode.interface";

export interface EpisodeState {
    loading: boolean,
    episodes: ReadonlyArray<EpisodeModel>;
}