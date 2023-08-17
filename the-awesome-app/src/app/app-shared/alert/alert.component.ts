import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent {
  @Input()
  title: string = "Title";
  @Input()
  message: string = "";
  @Input()
  severity: string = "info"; // info, success, warning, error
}
