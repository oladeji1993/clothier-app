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
    this.singleProducts = JSON.parse(localStorage.getItem("singleProduct") || "{}")
    this.cartItems = JSON.parse(localStorage.getItem("cartItems") || "{}")
    console.log(this.singleProducts)
  }

  addToCart() {
    let item: any = this.singleProducts
    if (this.cartItems == null || this.cartItems.length == 0) {
      this.cartItems.push({ ...item })
      localStorage.setItem("cartItems", JSON.stringify(this.cartItems))
      this._cartService.cartMessenger.next(true)
      this._toastr.success(item.name + " added to cart")
    } else {
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
