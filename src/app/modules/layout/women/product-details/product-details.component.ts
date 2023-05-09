import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  product_images: any[] = [];
  cartItems: any = []
  displayImg = 0
  singleProducts: any

  constructor(
    private _toastr: ToastrService,
    private _cartService: CartService,


  ) { }

  ngOnInit(): void {
    this.singleProducts = JSON.parse(localStorage.getItem("singleProduct")!)
    console.log(this.singleProducts)
  }

  addToCart() {
    this.cartItems = localStorage.getItem("cartItems")
    let item: any = this.singleProducts
    if (JSON.parse(this.cartItems) == null || JSON.parse(this.cartItems).length == 0) {
      this.cartItems = []
      this.cartItems.push({ ...item })
      localStorage.setItem("cartItems", JSON.stringify(this.cartItems))
      this._cartService.cartMessenger.next(true)
      this._toastr.success(item.name + " added to cart")
    } else {
      this.cartItems = JSON.parse(this.cartItems)
      let product = this.cartItems.find((p: any) => p.id == item.id)
      if (product) {
        // product.quantity++
        this._toastr.error(item.name + "item already in cart")
      } else if (product == undefined) {
        this.cartItems.push({ ...item })
        this._toastr.success(item.name + " added to cart")
      }
      localStorage.setItem("cartItems", JSON.stringify(this.cartItems))
      this._cartService.cartMessenger.next(true)
    }
  }

}
