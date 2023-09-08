import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  constructor(private route : Router){}
  
  submit(){
    this.route.navigate(['/']);
    console.log('back to home page');
  }

}
