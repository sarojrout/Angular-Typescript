import { Component, OnInit } from '@angular/core';
import {Cart} from '../../../models/cart';
import {Item} from '../../../models/item';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
cart: Cart = new Cart();
  constructor() { }

  ngOnInit() {
    this.cart = this.fillCart();
  }

  private fillCart(): Cart {
    let cart = new Cart();
    cart.status="full";
    cart.name="vegetable cart";
    cart.items=this.getItems();
    return cart;
  }

  private getItems():Item[] {
    let items: Item[] = new Array();
    items.push({
      name:"mango",
      description:"hawaian mangos",
      quantity:2,
      price:2,
      total:4
    },
    {
      name:"pear",
      description:"hawaian pear",
      quantity:4,
      price:3,
      total:12

    },
    {
      name:"bannana",
      description:"california bannanan",
      quantity:4,
      price:3,
      total:12

    },
    {
      name:"cauliflower",
      description:"californial cauliflower",
      quantity:4,
      price:3,
      total:12

    }
  )
  return items;
  }

}
