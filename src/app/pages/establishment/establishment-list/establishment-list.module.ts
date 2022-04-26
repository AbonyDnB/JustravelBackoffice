import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EstablishmentListRoutingModule } from './establishment-list-routing.module';
import { EstablishmentListComponent } from './establishment-list.component';
import { MaterialModule } from 'src/app/material.module';


@NgModule({
  declarations: [
    EstablishmentListComponent
  ],
  imports: [
    CommonModule,
    EstablishmentListRoutingModule,
    MaterialModule
  ]
})
export class EstablishmentListModule { }
