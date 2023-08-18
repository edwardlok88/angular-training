import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent } from './alert/alert.component';
import { HighlightDirective } from './highlight.directive';
import { ForbiddenValidatorDirective } from './forbidden-validator.directive';



@NgModule({
  declarations: [
    AlertComponent,
    HighlightDirective,
    ForbiddenValidatorDirective
  ],
  imports: [
    CommonModule
  ],
  //remember to export the directive since its a shared directive
  exports: [
    AlertComponent,
    HighlightDirective,
    ForbiddenValidatorDirective
  ]
})
export class AppSharedModule { }
