import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-women',
  templateUrl: './women.component.html',
  styleUrls: ['./women.component.scss']
})
export class WomenComponent implements OnInit {

  cartItems: any = []
  constructor(
    private _cartService: CartService,
    private _toastr: ToastrService,


  ) { }

  ngOnInit(): void {
  }

  products = [
    {
      id: 1,
      name: 'Round cold Jacket',
      price: '60.00',
      quantity: 1,
      image: '/assets/images/product1.svg',
      status: 'available'

    },
    {
      id: 2,
      name: 'Apollo Running Short',
      price: '50.00',
      quantity: 1,
      image: '/assets/images/product5.svg',
      status: 'available'
    },
    {
      id: 3,
      name: 'Office Short Sleeve',
      price: '150.00',
      quantity: 1,
      image: '/assets/images/notAvailable.png',
      status: 'not-available'
    },
    {
      id: 4,
      name: 'Brown silk bag',
      price: '40.00',
      quantity: 1,
      image: '/assets/images/product2.svg',
      status: 'available'
    },
    {
      id: 5,
      name: 'Round cold Jacket',
      quantity: 1,
      price: '60.00',
      image: '/assets/images/product1.svg',
      status: 'available'
    },
    {
      id: 6,
      name: 'Clean sleeve wear',
      price: '500.00',
      image: '/assets/images/product3.png',
      status: 'available'

    },
  ]


  addToCart(item: any) {
    if (this.cartItems == null || this.cartItems.length == 0) {
      this.cartItems.push({ ...item })
      localStorage.setItem("cartItems", JSON.stringify(this.cartItems))
      this._cartService.cartMessenger.next(true)
      this._toastr.success(item.name + " added to cart")
    } else {
      let product = this.cartItems.find((p: any) => p.id == item.id)
      if (product) {
        product.quantity++
        this._toastr.success(item.name + " quantity increase")
      } else if (product == undefined) {
        this.cartItems.push({ ...item })
        this._toastr.success(item.name + " added to cart")
      }
      localStorage.setItem("cartItems", JSON.stringify(this.cartItems))
      this._cartService.cartMessenger.next(true)
    }
  }


  details(item: any){
    localStorage.setItem("singleProduct", JSON.stringify(item))
  }


}
