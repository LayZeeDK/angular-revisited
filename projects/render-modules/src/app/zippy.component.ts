import {
  Component,
  Input,
  NgModule,
  ɵmarkDirty as markDirty,
} from '@angular/core';

import { ButtonComponent } from './button.component';

@Component({
  selector: 'zippy',
  template: `
    <button ivy-button (ivyClick)="toggle()">
      {{title}}
    </button>

    <div [hidden]="!show">
      <ng-content></ng-content>
    </div>
  `,
})
export class ZippyComponent {
  @Input()
  title: string;

  show = false;

  toggle() {
    this.show = !this.show;

    markDirty(this);
  }
}

@NgModule({
  declarations: [
    ZippyComponent,
    ButtonComponent,
  ],
})
export class ZippyRenderModule {}
