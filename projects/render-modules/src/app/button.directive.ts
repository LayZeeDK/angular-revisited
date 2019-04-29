import { Directive, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[ivyButton]',
})
export class ButtonDirective {
  @Output()
  ivyClick = new EventEmitter<void>();

  @HostListener('click')
  onClick() {
    this.ivyClick.emit();
  }
}
