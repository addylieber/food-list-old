import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';


// Import of the angular-material angular module
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { EditComponent } from './edit/edit.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, AngularMaterialModule ],
  declarations: [ AppComponent, HelloComponent, EditComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
