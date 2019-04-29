import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'ivy-button',
  template: `
    <button (click)="ivyClick.emit()">
      <ng-content></ng-content>
    </button>
  `,
})
export class ButtonComponent {
  @Output()
  ivyClick = new EventEmitter<void>();
}
