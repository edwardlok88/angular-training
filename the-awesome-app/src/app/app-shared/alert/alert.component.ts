import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent {
  @Input()
  title: string = "Title"; // property binding
  @Input()
  message: string = ""; // property binding
  @Input()
  severity: string = "info"; // roperty binding - info, success, warning, error
  @Output()
  closed: EventEmitter<void> = new EventEmitter(); // event binding - function call name

  close() {
    if (this.closed) {
      this.closed.emit();
    }
  }
}
