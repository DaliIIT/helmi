import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CardComponent} from './card/card.component';
import { IndicatorBubleDirective } from './card/directives/indicator-buble.directive';
import { ModalDirective } from './modal/modal.directive';
import { ReusBtnDirective } from './button/reus-btn.directive';
import {ModalContentDirective} from './modal/modal.content.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CardComponent,
    IndicatorBubleDirective,
    ModalDirective,
    ReusBtnDirective,
    ModalContentDirective,
  ],
  exports: [
    CardComponent,
    ModalDirective,
    ReusBtnDirective,
    ModalContentDirective,
  ]
})
export class ReusableModule {
}
