import { Route, Router } from '@angular/router';
import { Pokemon } from './../pokemon';
import { PokumonService } from './../pokumon.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokumon-form',
  templateUrl: './pokumon-form.component.html',
  styleUrls:['./pokumon-form.component.css']
  
})
export class PokumonFormComponent implements OnInit {
  @Input() pokemon ?:Pokemon ;
    types?: string[];
  constructor(private PokumonService:PokumonService,private router :Router) { }
 
  ngOnInit(){
    this.types=this.PokumonService.getPokumentType();
  }
  hasType(type : string):boolean |undefined {
    
   return this.pokemon?.types?.includes(type);
  }
  selectType($event : Event,type :string){
    const ischeked : boolean= ($event.target as HTMLInputElement ).checked;
     if(ischeked){
       this.pokemon?.types?.push(type);
     }
     else{
       const index =this.pokemon?.types?.indexOf(type);
       if(index != undefined)
       {
        this.pokemon?.types?.splice(index,1);

       }
       else{
           alert("nnnnnn");
       }
       
     }
    
  }
  isTypesValid(type :string ) : boolean{
     
    if(this.pokemon?.types?.length == 1 && this.hasType(type)){
      return false;
    }
    if( Number(this.pokemon?.types?.length) > 2 && ! this.hasType(type)){
      return false;
    }
    return true;
  }
  onSubmit(){
    console.log("le formulair est envoiye ");
    if(this.pokemon)
    this.router.navigate(['/pokumon/', this.pokemon.id]);
  }
}
