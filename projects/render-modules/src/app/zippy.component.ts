import { Component, Input, ɵmarkDirty as markDirty } from '@angular/core';

@Component({
  selector: 'zippy',
  template: `
    <button (click)="toggle()">
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
