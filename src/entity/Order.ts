import { Cart } from "./Cart";

    export interface IOrder {
        orderId: number;
        orderDate: Date; 
        orderStatus: string;
        cart: Cart; 
    }