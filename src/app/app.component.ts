import { Component } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { EditComponent } from './edit/edit.Component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';

  foodList = [
    {
      name: "cheese burger",
      foodGroup: "meat"
    },
    {
      name: "dragon fruit",
      foodGroup: "fruit"
    },
    {
      name: "milk",
      foodGroup: "dairy"
    }
  ];

  constructor(public dialog: MatDialog) {}

  addFood() {

    let dialogRef = this.dialog.open(EditComponent, {
      height: '400px',
      width: '600px',
    });
    // this.foodList.push({
    //   name: "spaghetti",
    //   foodGroup: "grain"
    // });
  }
}
