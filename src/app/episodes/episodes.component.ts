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

  constructor(private store: Store<AppState>) 
  { 
    this.episodes$ = this.store.select(state => state.episodes)
      //console.log(this.episodes$);
  }

  ngOnInit(): void {
    this.getEpisodes();
    /* this.dataService.getEpisodes(this.id)
    .subscribe((response: any) => {
      this.episodes = response.results.map((item: any) => {
        return {
          name: item.name,
          id: item.url.replace(this.dataService.getApiUrl() + '/episodes/', '').replace('/', '').trim()
        }
      })
    }); */
  }
  getEpisodes(){
    this.store.dispatch(loadEpisode())
    this.store.dispatch(GETE())
    this.episodes$.subscribe(response => {
      //console.log(response);
    });
  }

}
