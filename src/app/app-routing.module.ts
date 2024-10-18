import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './comps/cart/cart.component';
import { HomeComponent } from './comps/home/home.component';
import { LoginComponent } from './comps/login/login.component';
import { RegisterComponent } from './comps/register/register.component';
import { DashboardComponent } from './comps/dashboard/dashboard.component';
import { UpdateFoodComponent } from './comps/update-food/update-food.component';
import { AddFoodComponent } from './comps/add-food/add-food.component';
import { OrderComponent } from './comps/order/order.component';
import { AdminLoginComponent } from './comps/admin-login/admin-login.component';
import { AdminregisterComponent } from './comps/adminregister/adminregister.component';

const routes: Routes = [

  {path: '', component: HomeComponent},
  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path: 'cart',component:CartComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'update',component:UpdateFoodComponent},
  {path:'addfood',component:AddFoodComponent},
  {path: 'orderDetails',component:OrderComponent},
  {path:'adminlogin',component:AdminLoginComponent},
  {path:'adminregister',component:AdminregisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
