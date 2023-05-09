import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  cartNumber: any = 0
  cartItems: any = []
  total: any = 0;
  refNumber: any;
  clientDetails: any = 0

  constructor(
    private cartService: CartService,
    private _toaster: ToastrService

  ) { }

  ngOnInit(): void {
    this.refNumber =  `ref-${Math.ceil(Math.random() * 10e13)}`;
    this.cartItems = JSON.parse(localStorage.getItem("cartItems")!)
    this.cartService.cartMessenger.subscribe((resp: any) => {
      if (resp != null) {
        this.cartNumber = JSON.parse(localStorage.getItem("cartItems") || "")?.length;
        this.cartItems = JSON.parse(localStorage.getItem("cartItems") || "{}")
        this.getTotal()
      } else {
        this.cartNumber = JSON.parse(localStorage.getItem("cartItems") || "")?.length;
        this.cartItems = JSON.parse(localStorage.getItem("cartItems") || "{}")
        this.getTotal()
      }
    })
  }

  

  pay() {
    if (this.clientDetails == undefined) {
      console.log('Kindly Select a delivery Address')
    }
  }

  paymentInit() {
    console.log('Payment initialized');
  }


  paymentDone(event:any){
    if(event){
      this._toaster.success("Payment Successful", 'Success')
      this.refNumber =  `ref-${Math.ceil(Math.random() * 10e13)}`;
    }
  }

  increaseQty(item: any) {
    this.cartItems.forEach((element: any) => {
      if (element.id == item.id) {
        element.quantity++;
      }
    });
    localStorage.setItem("cartItems", JSON.stringify(this.cartItems))
  }

  decreaseQty(item: any) {
    this.cartItems.forEach((element: any) => {
      if (element.id == item.id) {
        if(element.quantity > 1){
          element.quantity--;
        }else if(element.quantity = 1){
          this._toaster.error('Quantity can not be less than 1', 'Error')
        }
      } 
    });
    localStorage.setItem("cartItems", JSON.stringify(this.cartItems))
  }

  paymentCancel() {
    console.log('payment failed');
  }


  getTotal(){
    this.total = 0;
    if(this.cartItems.length == 0) return 0;
    this.cartItems.forEach((element:any) => {
      this.total = this.total + (Number(element.price) * Number(element.quantity));
    });
    console.log(this.total)
    return this.total;
  }


}
