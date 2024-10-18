import { Component } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {
 totalPrice = localStorage.getItem('totalPrice');

  dummyOrder = {
    orderId: 1,
    orderDate: new Date().toISOString(),
    orderStatus: 'Pending',
    cart: {
      cartId: 1
    }
  };  
  carty: any = {};
   
  constructor(private cartService:CartService,private orderService:OrderService) { } 

  ngOnInit(): void {
    this.cartService.getCartbyId(1).subscribe( //change here user.id
      (data: any) => {
        this.carty = data;
        console.log(this.carty); 
      },
      (error) => {
        console.error('Error fetching cart:', error); 
      }
    );

    this.orderService.createOrder(this.dummyOrder).subscribe( 
      (data: any) => {
        console.log('Order created:', data); 
      },
      (error) => {
        console.error('Error creating order:', error); 
      }
    );
  } 
  makePayment(){
    localStorage.removeItem('totalPrice');
    console.log('Payment made successfully  for order:', this.dummyOrder);
  }
}
