import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SelectComponent } from './core/components/select/select.component';
import { InputComponent } from './core/components/input/input.component';
import { CoreModule } from './core/core.module';
import { StepperComponent } from './core/components/stepper/stepper.component';
import { IconTitleComponent } from './core/components/icon-title/icon-title.component';
@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    SelectComponent,
    StepperComponent,
    IconTitleComponent
  ],
  imports: [
    CoreModule,
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
