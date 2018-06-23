import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {BUBBLE} from './interfaces/bubbleProps.interface';
import {BTN} from './interfaces/btn.interface';

@Component({
  selector: 'reus-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css',
    '../reus.style.css']
})

export class CardComponent implements OnInit {

  @Input('image') image = 'http://anyandgo.io/img/user-placeholder.png';
  @Input('title') title = 'TITLE';
  @Input('content') content = ['Lorem Ipsum is simply dummy text of the printing and typesetting industry'];
  @Input('bubble') bubble: BUBBLE = {};
  @Input('btns') btns: BTN[];

  @Output('click') clicked = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit() {
    // console.log(this.bubble);
  }

  btnclick(x) {
    this.clicked.emit(x.text);
  }



}
