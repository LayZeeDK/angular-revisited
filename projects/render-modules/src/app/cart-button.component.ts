import { Component } from '@angular/core';
import { MatButton, MatIcon } from '@angular/material';

@Component({
  selector: 'cart-button',
  template: `
    <button mat-icon-button type="button" (click)="onClick()">
      <mat-icon aria-label="Add to shopping cart">shopping_cart</mat-icon>
    </button>
  `,
})
export class CartButtonComponent {
  onClick(): void {
    this.addToShoppingCart();
  }

  private addToShoppingCart(): void {
    console.log('Added to shopping cart');
  }
}

export const cartButtonDeps = [
  CartButtonComponent,
  MatButton,
  MatIcon,
];
