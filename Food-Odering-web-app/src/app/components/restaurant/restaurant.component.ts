import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent {
  constructor(private route : Router){}


  submit(){
    this.route.navigate(['/users']);
    console.log("move to users page");
  
  }

}
