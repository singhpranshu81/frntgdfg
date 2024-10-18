import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FoodService } from 'src/app/services/food.service';
import { Food } from 'src/entity/Food';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {

   isAdmin: boolean =false;
    
  dummyfood: Food = {
    foodId: 0,
    foodName: '',
    quantity: 0,
    price: 0,
    description:'',
    url:'',
    category: {
      categoryId: 0,
      categoryName: '',
    },
    cart: {
      cartId: 0,
    },
  };

  food: any[] = []; //hold all food
  name:string='';
  constructor(private foodService: FoodService, private router: Router) {}
   
  ngOnInit(): void {
    this.foodService.getAllFood().subscribe((data) => {
      this.food = data; // Store the list of all food
    });  
    const currentUserRole = JSON.parse(
      localStorage.getItem('user') || '{}'
    ).role;
    const currentUserName=JSON.parse(
      localStorage.getItem('user') || '{}'
    ).fullName;
    this.name=currentUserName;
    if(currentUserRole === 'Admin'){
      this.isAdmin=true;
    }
    console.log(this.isAdmin);
  }
  addToCart(food: any) {
    // console.log(food);
    this.dummyfood.foodId = food.foodId;
    this.dummyfood.foodName = food.foodName;
    this.dummyfood.price = food.price;
    this.dummyfood.quantity = food.quantity;
    this.dummyfood.category = food.category;
    this.dummyfood.cart.cartId = 1;
    console.log(this.dummyfood);
    //  console.log(this.dummyfood.foodId)
    //  debugger;
    // food.cart.cartId = 1;
    this.foodService.updateFood(this.dummyfood).subscribe((data) => {
      // Update the food item
      console.log("assdsdeee"+data); // Log the response
    });
    this.router.navigate(['/cart']);
  }
  deleteFood(id: any) {
          this.foodService.deleteFood(id).subscribe(
            {
                  next:(response)=>{
                    console.log("Food deleted..",response);
                    this.router.navigate(['/dashboard'])
                  },
                  error: (error)=>{
                    console.error("error deleting food...",error)
                  },
                } 
          );
  }
  goToAddFood(){
    this.router.navigate(['/addfood'])
  }
}
