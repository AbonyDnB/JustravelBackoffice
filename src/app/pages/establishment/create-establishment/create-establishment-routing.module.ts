import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEstablishmentComponent } from './create-establishment.component';

const routes: Routes = [{ path: '', component: CreateEstablishmentComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateEstablishmentRoutingModule { }
