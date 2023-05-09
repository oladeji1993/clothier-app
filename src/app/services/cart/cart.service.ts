import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartMessenger = new BehaviorSubject<any>(null)


  constructor() { }
}
