import { Component } from '@angular/core';

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


  addFood() {
    this.foodList.push({
      name: "spaghetti",
      foodGroup: "grain"
    });
  }
}
