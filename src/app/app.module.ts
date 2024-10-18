import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './comps/home/home.component';
import { CartComponent } from './comps/cart/cart.component';
import { OrderComponent } from './comps/order/order.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './Fixed/navbar/navbar.component';
import { FooterComponent } from './Fixed/footer/footer.component';
import { LoginComponent } from './comps/login/login.component';
import { RegisterComponent } from './comps/register/register.component';
import { DashboardComponent } from './comps/dashboard/dashboard.component';
import { UpdateFoodComponent } from './comps/update-food/update-food.component';
import { AddFoodComponent } from './comps/add-food/add-food.component';
import { AdminLoginComponent } from './comps/admin-login/admin-login.component';
import { AdminregisterComponent } from './comps/adminregister/adminregister.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CartComponent,
    OrderComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    UpdateFoodComponent,
    AddFoodComponent,
    AdminLoginComponent,
    AdminregisterComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent,NavbarComponent,FooterComponent]
})
export class AppModule { }
