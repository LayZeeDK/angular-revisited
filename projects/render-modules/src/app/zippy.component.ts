import { Component, Input, ɵmarkDirty as markDirty } from '@angular/core';

import { ButtonDirective } from './button.directive';

@Component({
  selector: 'zippy',
  template: `
    <button ivyButton (ivyClick)="toggle()">
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

export const zippyDeps = [
  ZippyComponent,
  ButtonDirective,
];
