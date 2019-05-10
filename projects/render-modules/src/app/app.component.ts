import { Component, NgModule } from '@angular/core';

import { CapitalizePipe } from './capitalize.pipe';
import { cartButtonDeps } from './cart-button.component';
import { zippyDeps } from './zippy.component';

@Component({
  selector: 'app-root',
  template: `
    <zippy title="Toggle">
      <cart-button></cart-button>
      {{title | capitalize}}
    </zippy>
  `,
})
export class AppComponent {
  title = 'render modules';
}

@NgModule({
  declarations: [
    AppComponent,
    CapitalizePipe,
    zippyDeps,
    cartButtonDeps,
  ],
})
export class AppRenderModule {}
