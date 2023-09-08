import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private route : Router){}
  title = 'Food-Odering-web-app';
  
  
  submit(){
    this.route.navigate(['/admin']);
    console.log("move to admin page");
  }
}

