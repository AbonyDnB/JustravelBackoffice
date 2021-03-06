import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstablishmentListComponent } from './establishment-list.component';

const routes: Routes = [{ path: '', component: EstablishmentListComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EstablishmentListRoutingModule { }
