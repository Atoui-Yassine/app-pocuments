import { Pokemon } from './../pokemon';
import { PokumonService } from './../pokumon.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-pokumon',
  template: `
    <h2 class="center"> Edite {{ pokemon?.name }} </h2>
    <div *ngIf="pokemon" class="center">
      <img [src]="pokemon.picture" >
    </div>
    <app-pokumon-form *ngIf="pokemon" [pokemon]="pokemon" ></app-pokumon-form> 
  `,
  styles: [
  ]
})
export class EditPokumonComponent implements OnInit {
   pokemon : Pokemon | undefined;
  constructor(
    private router:ActivatedRoute,
    private PokumonService:PokumonService
  ) { }

  ngOnInit() {
    const pokumonId :string | null  = this.router.snapshot.paramMap.get('id');
    if( pokumonId){
      this.pokemon= this.PokumonService.getPokumonById(+ pokumonId);
    }
    else{
      this.pokemon=undefined;
    }
  }

}
