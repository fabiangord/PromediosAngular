import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { ResultadoComponent } from './resultado/resultado.component';
import { PromedComponent } from './promed/promed.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    ResultadoComponent,
    PromedComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
