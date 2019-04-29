import { Component, EventEmitter, NgModule, Output } from '@angular/core';

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

@NgModule({
  declarations: [ButtonComponent],
  exports: [ButtonComponent],
})
export class ButtonModule {}
