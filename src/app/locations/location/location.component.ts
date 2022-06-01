import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { GETL, loadLocation } from 'src/app/state/actions/location.actions';
import { AppState } from 'src/app/state/app.state';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {
  loading$: Observable<boolean> = new Observable()
  locations$: Observable<any> = new Observable()
  filteredString: string = "";

  constructor(
    private store: Store<AppState>
    ) {
      this.locations$ = this.store.select(state => state.locations)
      //console.log(this.locations$);
     }

  ngOnInit(): void {
    this.getLocations();
    /* this.dataService.getLocations(this.id)
    .subscribe((response: any) => {
      this.locations = response.results.map((item: any) => {
        return {
          name: item.name,
          id: item.url.replace(this.dataService.getApiUrl() + '/locations/', '').replace('/', '').trim()
        }
      })
    }); */
  }
    
    getLocations(){
      this.store.dispatch(loadLocation())
    this.store.dispatch(GETL())
    this.locations$.subscribe(response => {
      //console.log(response);
    });
  }

}
