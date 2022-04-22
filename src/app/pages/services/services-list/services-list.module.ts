import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicesListRoutingModule } from './services-list-routing.module';
import { ServicesListComponent } from './services-list.component';
import { MaterialModule } from 'src/app/material.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    ServicesListComponent
  ],
  imports: [
    CommonModule,
    ServicesListRoutingModule,
    MaterialModule,
    RouterModule
  ]
})
export class ServicesListModule { }
