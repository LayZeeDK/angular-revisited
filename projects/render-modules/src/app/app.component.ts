import { Component, NgModule } from '@angular/core';

import { CapitalizePipe } from './capitalize.pipe';
import { ZippyComponent } from './zippy.component';

@Component({
  selector: 'app-root',
  template: `
    <zippy title="Toggle">
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
    ZippyComponent,
  ],
})
export class AppRenderModule {}
