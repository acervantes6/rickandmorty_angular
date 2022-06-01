import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { GETE, loadEpisode } from '../state/actions/episodes.actions';
import { AppState } from '../state/app.state';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.css']
})
export class EpisodesComponent implements OnInit {
  loading$: Observable<boolean> = new Observable()
  episodes$: Observable<any> = new Observable()
  filteredString: string = "";
  filteredLocations: string = "";

  constructor(private store: Store<AppState>) 
  { 
    this.episodes$ = this.store.select(state => state.episodes)
  }

  ngOnInit(): void {
    this.getEpisodes();

  }
  getEpisodes(){
    this.store.dispatch(loadEpisode())
    this.store.dispatch(GETE())
    this.episodes$.subscribe(response => {
    });
  }

}
