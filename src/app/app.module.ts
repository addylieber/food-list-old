import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { EditComponent } from './edit/edit.component';

import { CommonModule } from '@angular/common';

// For components using angular-animations
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Imports of used components 
import { 
  MatDialogModule
} from '@angular/material';

@NgModule({
  imports:      [ BrowserModule, FormsModule, MatDialogModule, BrowserAnimationsModule ],
  declarations: [ AppComponent, HelloComponent, EditComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
