import { Component, EventEmitter, HostListener, Output } from '@angular/core';

@Component({
  selector: 'button[ivy-button]',
  template: `
    <ng-content></ng-content>
  `,
})
export class ButtonComponent {
  @Output()
  ivyClick = new EventEmitter<void>();

  @HostListener('click')
  onClick() {
    this.ivyClick.emit();
  }
}
