import { Pokemon } from './pokemon';
import { Injectable } from '@angular/core';
import { POKEMONS } from './mock-pokemon-list';

@Injectable()
export class PokumonService {
 p : Pokemon=new Pokemon();
  
  getPokumonList():Pokemon[]{
    return POKEMONS;
  }
  getPokumonById(pokumonId :number):Pokemon | undefined {
   let resu : Pokemon | undefined = POKEMONS.find(pokemon => pokemon.id == pokumonId);
    if (resu == undefined){
      return this.p;
    }
    else{
      return resu;
    }
    
  }

  getPokumentType():string[]{
    return ['Plante','Feu','Poison','Eau','Insecte','Normal','Vol','Electrik','Fée'];
  }
}
