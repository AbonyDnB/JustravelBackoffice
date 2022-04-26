import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatChipsModule} from '@angular/material/chips';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import {MatStepperModule} from '@angular/material/stepper';

const myModules = [
  MatToolbarModule,
  MatSidenavModule,
  MatButtonModule,
  MatMenuModule,
  MatListModule,
  MatIconModule,
  MatFormFieldModule,
  MatCardModule,
  MatRadioModule,
  MatCheckboxModule,
  MatButtonToggleModule,
  MatChipsModule,
  MatAutocompleteModule,
  MatSelectModule,
  MatInputModule,
  MatStepperModule
];

@NgModule({
  imports: [...myModules],
  exports: [...myModules],
})
export class MaterialModule {}
