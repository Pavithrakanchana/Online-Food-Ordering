import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './components/admin/admin.component';
import { UsersComponent } from './components/users/users.component';
import { MenuComponent } from './components/menu/menu.component';
import { RestaurantComponent } from './components/restaurant/restaurant.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    UsersComponent,
    MenuComponent,
    RestaurantComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
