import { Pokemon } from './pokumen/pokemon';
import { POKEMONS } from './pokumen/mock-pokemon-list';
import { Component,OnInit } from '@angular/core';
import { find } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: `app.component.html`,
 
})
export class AppComponent implements OnInit {
  pokcmonsList :Pokemon []=POKEMONS ;
  pokumenSelected ?:Pokemon;
  toched :boolean =false;
  ngOnInit(): void {
     console.table(this.pokcmonsList); 
      
  }

  selectPokumon(pokemonId : string){
    //const index :number = +(event.target as HTMLInputElement) .value;
   // console.log(`Vous avez clique sur le pokemon ${this.pokcmonsList[index].name }`);
    const id :number = (Number) (pokemonId);
    this.toched=true;
    const pokumon :Pokemon | undefined =this.pokcmonsList.find(pokumon=>pokumon.id== +pokemonId);
    if (pokumon){
      console.log(`le pokumen qui demende est ${pokumon.name}`);
      this.pokumenSelected=pokumon;
      
    }
    else{
      console.log(`le pokumen qui demende non existe`);
      this.pokumenSelected=pokumon;
      
    }

    
  }
 
}
