import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loadCharacter, GET } from '../state/actions/character.actions';
import { AppState } from '../state/app.state';


@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {  
  loading$: Observable<boolean> = new Observable()
  characters$: Observable<any> = new Observable()
  filteredString: string = "";

  constructor(
    private store: Store<AppState>
    ) { 
      this.characters$ = this.store.select(state => state.characters)
  }

  ngOnInit(): void {
    this.getCharacters(); 
  }

  getCharacters() {
    this.store.dispatch(loadCharacter())
    this.store.dispatch(GET())
    this.characters$.subscribe(response => {
    });
  }

}
