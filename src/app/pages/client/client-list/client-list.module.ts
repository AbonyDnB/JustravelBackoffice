import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientListRoutingModule } from './client-list-routing.module';
import { ClientListComponent } from './client-list.component';
import { MaterialModule } from 'src/app/material.module';


@NgModule({
  declarations: [
    ClientListComponent
  ],
  imports: [
    CommonModule,
    ClientListRoutingModule,
    MaterialModule
  ]
})
export class ClientListModule { }
