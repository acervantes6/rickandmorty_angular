import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { DataService } from 'src/app/services/data.service';

@Injectable()
export class LocationsEffects {

  loadLocations$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[Location List] load location'),
      mergeMap(() => this.dataService.getDataApiLocation()
        .pipe(
          map((response: any) => ({ type: '[Location List] loaded success', locations: response.results })),
          catchError(() => of({ type: '[Location List] Loaded Error' }))
        )
      )
    )
  );
   
  constructor(
    private actions$: Actions,
    private dataService: DataService
  ) {}
}