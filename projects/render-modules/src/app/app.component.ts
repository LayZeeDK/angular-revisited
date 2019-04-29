import { Component, NgModule } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    Hello, {{title}}!
  `,
})
export class AppComponent {
  title = 'render modules';
}

@NgModule({
  declarations: [
    AppComponent,
  ],
})
export class AppRenderModule {}
