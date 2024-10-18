import { Cart } from "./Cart";
import { Category } from "./Category";

    export interface Food {
        foodId: number;
        foodName: string;
        quantity: number;
        price: number;
        category: Category;
        cart: Cart;
        description:string;
        url:string
    }