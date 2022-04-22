import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateEstablishmentRoutingModule } from './create-establishment-routing.module';
import { CreateEstablishmentComponent } from './create-establishment.component';
import { MaterialModule } from 'src/app/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [
    CreateEstablishmentComponent
  ],
  imports: [
    CommonModule,
    CreateEstablishmentRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    MatInputModule
  ]
})
export class CreateEstablishmentModule { }
