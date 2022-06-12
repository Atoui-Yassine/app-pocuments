import { PokumonService } from './../pokumon.service';
import { Pokemon } from '../pokemon';
import { ActivatedRoute ,Router} from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { POKEMONS } from '../mock-pokemon-list';
import { TmplAstRecursiveVisitor } from '@angular/compiler';

@Component({
  selector: 'app-detail-pokumen',
  templateUrl: './detail-pokumen.component.html',
  
})
export class DetailPokumenComponent implements OnInit {
 pokumonList :Pokemon[] | undefined;
 pokemon? :Pokemon;
   
    constructor(
    private route :ActivatedRoute , 
    private router : Router,
    private PokumonService :PokumonService
    ) { }

   ngOnInit(): void {
    // this.pokumonList=this.PokumonService.getPokumonList();
    const pokumonId :string | null = this.route.snapshot.paramMap.get('id');
    
    if(pokumonId ){
      this.pokemon= this.PokumonService.getPokumonById ( + pokumonId);
 
    }
    
     }
     goBack(){
       this.router.navigate(['/pokumon']);
     }
     
     editPokumon(pokumen : Pokemon ){
      console.log("yassine");
      this.router.navigate(['edite/pokumon/',pokumen.id]);
     }
    
     
}
