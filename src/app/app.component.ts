import { Component, NgModule } from '@angular/core';

import { CapitalizeModule } from './capitalize.pipe';
import { ZippyModule } from './zippy.component';

@Component({
  selector: 'app-root',
  template: `
    <zippy title="Toggle">
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
    ZippyModule,
  ],
})
export class AppModule {}
