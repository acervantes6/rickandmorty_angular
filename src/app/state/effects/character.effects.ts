import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { DataService } from 'src/app/services/data.service';

@Injectable()
export class CharactersEffects {

  loadCharacters$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[Character List] load character'),
      mergeMap(() => this.dataService.getDataApiCharacter()
        .pipe(
          map((response: any) => ({ type: '[Character List] loaded success', characters: response.results })),
          catchError(() => of({ type: '[Character List] Loaded Error' }))
        )
      )
    )
  );
   
  constructor(
    private actions$: Actions,
    private dataService: DataService
  ) {}
}