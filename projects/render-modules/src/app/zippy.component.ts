import { Component, Input, ɵmarkDirty as markDirty } from '@angular/core';

import { ButtonDirective } from './button.directive';

@Component({
  selector: 'zippy',
  template: `
    <button ivyButton (ivyClick)="toggle()">
      {{icon}} {{title}}
    </button>

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

export const zippyDeps = [
  ZippyComponent,
  ButtonDirective,
];
