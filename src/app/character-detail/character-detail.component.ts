import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { GET } from '../state/actions/character.actions';
import { AppState } from '../state/app.state';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.css']
})
export class CharacterDetailComponent implements OnInit {
  characterId!: number;
  characterInfo: any;
  charactersInfo$: Observable<any> = new Observable()
  loading$: Observable<boolean> = new Observable()

  constructor(
              //private dataService: DataService,
              private route: ActivatedRoute,
              private store: Store<AppState>
              ) 
  { 
    this.charactersInfo$ = this.store.select(state => state.characters)
      console.log(this.charactersInfo$);
  }

  ngOnInit() {
    this.getCharactersInfo();
    /* this.route.params.subscribe((params: Params) => {
      this.characterId = params['id'];
      console.log(params['id']);
    });
      this.dataService.getCharacters(this.characterId).subscribe(response => {
      this.characterInfo = response;
    });  */
  }
  getCharactersInfo(){
    this.route.params.subscribe((params: Params) => {
      this.characterId = params['id'];
      //console.log(params['id']);
    });
    this.store.dispatch(GET())
    this.charactersInfo$.subscribe(response => {
      //console.log('Detalle tarjeta', response); 
      const { characters } = response;
      this.characterInfo = characters.find((c: { id: number; }) => c.id == this.characterId)
      //console.log('characters info',this.characterInfo)
    }); 
  }
}
