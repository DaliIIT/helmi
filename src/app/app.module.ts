import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {StudentModule} from './students/student.module';
import {ModalDirective} from './myModules/reusable/modal/modal.directive';
import {ReusableModule} from './myModules/reusable/reusable.module';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { SidebarFiltersComponent } from './sidebar-filters/sidebar-filters.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarFiltersComponent,
    HeaderComponent,

  ],
  imports: [
    BrowserModule,
    StudentModule,
    ReusableModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
