import {
  Component,
  Input,
  NgModule,
  ɵmarkDirty as markDirty,
} from '@angular/core';

import { ButtonModule } from './button.component';

@Component({
  selector: 'zippy',
  template: `
    <ivy-button (ivyClick)="toggle()">
      {{icon}} {{title}}
    </ivy-button>

    <div [hidden]="!show">
      <ng-content></ng-content>
    </div>
  `,
})
export class ZippyComponent {
  @Input()
  title: string;

  get icon(): string {
    return this.show
      ? '▼'
      : '►';
  }
  show = false;

  toggle() {
    this.show = !this.show;

    markDirty(this);
  }
}

@NgModule({
  declarations: [ZippyComponent],
  exports: [ZippyComponent],
  imports: [
    ButtonModule,
  ],
})
export class ZippyModule {}
