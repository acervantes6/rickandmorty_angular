import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { DataService } from 'src/app/services/data.service';

@Injectable()
export class EpisodesEffects {

  loadEpisodes$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[Episode List] load episode'),
      mergeMap(() => this.dataService.getDataApiEpisode()
        .pipe(
          map((response: any) => ({ type: '[Episode List] loaded success', episodes: response.results })),
          catchError(() => of({ type: '[Episode List] Loaded Error' }))
        )
      )
    )
  );
   
  constructor(
    private actions$: Actions,
    private dataService: DataService
  ) {}
}