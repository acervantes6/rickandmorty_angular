import { LocationModel } from "./location.interface";

export interface LocationState {
    loading: boolean,
    locations: ReadonlyArray<LocationModel>;
}