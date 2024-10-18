import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { FoodService } from 'src/app/services/food.service';
import { Food } from 'src/entity/Food';

@Component({
  selector: 'app-add-food',
  templateUrl: './add-food.component.html',
  styleUrls: ['./add-food.component.css']
})
export class AddFoodComponent {
  foodModel:Food = {
    foodId:0,
    foodName: '',
    description: '',
    price: 0,
    quantity:0,
    url: '',
    category:{
      categoryId:0,
      categoryName:''
    },
    cart:{
      cartId:0
    }
  };

  categoryType: string = '';  // This will hold the value of the selected option
  categoryId: string = '';    // For new category ID
  categoryName: string = '';  // For new category name
  existingCategories: string[] = ['Category 1', 'Category 2', 'Category 3', 'Category 4'];  // Existing category list
 
 
  // Methods to check the current category selection
  isCreateNewCategory(): boolean {
    return this.categoryType === 'new';
  }
 
  isSelectExistingCategory(): boolean {
    return this.categoryType === 'existing';
  }

 constructor(private foodService:FoodService,private categoryService:CategoryService,private router:Router){}
      category:any=[]
 ngOnInit(): void {
   this.categoryService.getAllCategory().subscribe(
    (data)=>{

      this.category=data;
    }
   )
  
 }

  onSubmit(){
   // this.findCategoryByName(this.foodModel.category.categoryName)
   this.foodService.createFood(this.foodModel).subscribe({
    next: (response) => {

      console.log("Food Created..", response);
      this.router.navigate(['/dashboard']);
    },
    error: (error) => {
      console.error("Error adding Food...", error);
    }
  }
   )
  }
  findCategoryByName(categoryName: any): void {
    const foundCategory = this.category.find((category: { categoryName: string; })  => category.categoryName === this.foodModel.category.categoryName);
    
    if (foundCategory) {
      console.log('Found Category:', foundCategory);
      // Perform any other actions with the found category
    } else {
      console.log('Category not found');
    }
  }


  
}
