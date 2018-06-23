import {Component, Renderer2} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private renderer: Renderer2) {
  }

  open(modal: any) {
    this.renderer.setStyle(modal, 'display', 'block');
  }


}

