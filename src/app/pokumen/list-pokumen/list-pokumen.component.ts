import { PokumonService } from './../pokumon.service';
import { Pokemon } from '../pokemon';
import { Component ,OnInit } from '@angular/core';

import { Route, ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-list-pokumen',
  templateUrl: './list-pokumen.component.html',
  
})
export class ListPokumenComponent implements OnInit {
  pokcmonsList ? : Pokemon[]  ;
  
  constructor(
    private route:Router,
    private PokumonService :PokumonService
    ){}
  ngOnInit(): void {
      this.pokcmonsList=this.PokumonService.getPokumonList();
  }
  
  navigatetoPOkumon(pokumonId : number){
       this.route.navigate(['/pokumon/'+pokumonId]);
  }
}
