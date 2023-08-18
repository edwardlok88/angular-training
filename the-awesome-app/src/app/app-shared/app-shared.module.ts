import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent } from './alert/alert.component';
import { HighlightDirective } from './highlight.directive';



@NgModule({
  declarations: [
    AlertComponent,
    HighlightDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AlertComponent,
    HighlightDirective
  ]
})
export class AppSharedModule { }
