import { PokumonService } from './pokumon.service';
import { PokumenTypeColorPipe } from './pokumen-type-color.pipe';
import { BorderCardDirective } from './border-card.directive';
import { ListPokumenComponent } from './list-pokumen/list-pokumen.component';
import { DetailPokumenComponent } from './detail-pokumen/detail-pokumen.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { PokumonFormComponent } from './pokumon-form/pokumon-form.component';
import { EditPokumonComponent } from './edit-pokumon/edit-pokumon.component';
const routesPokumen: Routes = [
  {path :'edite/pokumon/:id', component:EditPokumonComponent},
  {path :'pokumon' , component:ListPokumenComponent},
  {path :'pokumon/:id' , component:DetailPokumenComponent}
  
 
];


@NgModule({
  declarations: [
    DetailPokumenComponent,
    ListPokumenComponent,
    BorderCardDirective,
    PokumenTypeColorPipe,
    PokumonFormComponent,
    EditPokumonComponent

  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routesPokumen)
  ],
  providers:[PokumonService]

})
export class PokumenModule { }
