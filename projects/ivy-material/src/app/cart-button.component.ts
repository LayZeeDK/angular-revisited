import { Component, NgModule } from '@angular/core';
import { MatButtonModule, MatIconModule } from '@angular/material';

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
    // (...)
  }
}

@NgModule({
  declarations: [CartButtonComponent],
  exports: [CartButtonComponent],
  imports: [
    MatButtonModule,
    MatIconModule,
  ],
})
export class CartButtonModule {}
