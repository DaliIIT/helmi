import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StudentsDisplayComponent} from './students-display/students-display.component';
import {ReusableModule} from '../myModules/reusable/reusable.module';
import {FormsModule} from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    ReusableModule,
    FormsModule
  ],
  declarations: [
    StudentsDisplayComponent,
  ],
  providers: [],
  exports: [
    StudentsDisplayComponent
  ]
})

export class StudentModule {
}
