import { Component, NgModule } from '@angular/core';

import { CapitalizeModule } from './capitalize.pipe';
import { CartButtonModule } from './cart-button.component';
import { ZippyModule } from './zippy.component';

@Component({
  selector: 'app-root',
  template: `
    <zippy title="Toggle">
      <cart-button></cart-button>
      {{label | capitalize}}
    </zippy>
  `,
})
export class AppComponent {
  label = 'angular revisited';
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    CapitalizeModule,
    CartButtonModule,
    ZippyModule,
  ],
})
export class AppModule {}
