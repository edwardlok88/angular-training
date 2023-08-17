import { AfterContentInit, Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnChanges, OnInit, AfterContentInit, OnDestroy {
  @Input()
  title: string = "Title"; // property binding
  @Input()
  message: string = ""; // property binding
  @Input()
  severity: string = "info"; // roperty binding - info, success, warning, error
  @Output()
  closed: EventEmitter<void> = new EventEmitter(); // event binding - function call name

  severityCss: any = { "alert-info": true };

  constructor() {
    console.log("AlertComponent constructor:", this.title, this.message, this.severity);
  }

  ngOnDestroy(): void {
    console.log("AlertComponent ngOnDestroy:", this.title, this.message, this.severity);
  }

  ngAfterContentInit(): void {
    console.log("AlertComponent ngAfterContentInit:", this.title, this.message, this.severity);
  }

  ngOnInit(): void {
    console.log("AlertComponent ngOnInit", this.title, this.message, this.severity);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("AlertComponent ngOnChanges:", changes);
    console.log("AlertComponent ngOnChanges:", this.title, this.message, this.severity);
    this.changeSeverityCss();
  }

  close() {
    if (this.closed) {
      this.closed.emit();
    }
  }

  changeSeverityCss() {
    switch (this.severity) {
      case "info":
        this.severityCss = { "alert-info": true };
        break;
      case "success":
        this.severityCss = { "alert-success": true };
        break;
      case "warning":
        this.severityCss = { "alert-warning": true };
        break;
      case "error":
        this.severityCss = { "alert-danger": true };
        break;
    }
  }
}
