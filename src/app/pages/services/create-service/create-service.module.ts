import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateServiceRoutingModule } from './create-service-routing.module';
import { CreateServiceComponent } from './create-service.component';
import { MaterialModule } from 'src/app/material.module';


@NgModule({
  declarations: [
    CreateServiceComponent
  ],
  imports: [
    CommonModule,
    CreateServiceRoutingModule,
    MaterialModule
  ]
})
export class CreateServiceModule { }
