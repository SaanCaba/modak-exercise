import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { StepperComponent } from './components/stepper/stepper.component';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule
  ],
  exports : [
    MatSelectModule,
    MatButtonModule,
    MatInputModule,
  ],

})
export class CoreModule { }
