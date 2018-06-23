import {Directive, ElementRef, Input, OnInit, Renderer2} from '@angular/core';
import {st} from '@angular/core/src/render3';
import {BUBBLE} from '../interfaces/bubbleProps.interface';

@Directive({
  selector: '[appIndicatorBuble]'
})
export class IndicatorBubleDirective implements OnInit {

  @Input('appIndicatorBuble') stylesInput: BUBBLE;

  styles = {
    position: 'absolute',
    textAlign: 'center',
    lineHeight: '3em',
    margin: '0.5em 11.5em',
    padding: '0',
    width: '3em',
    height: '3em',
    borderRadius: '30px',
    backgroundColor: 'red',
    zIndex: '999',
    color: 'white',
    display: 'block'
  };

  constructor(private el: ElementRef, private renderer: Renderer2) {
  }

  ngOnInit(): void {

    this.styles = Object.assign({}, this.styles, this.stylesInput);

    this.renderer.setStyle(this.el.nativeElement, 'position', this.styles.position);
    this.renderer.setStyle(this.el.nativeElement, 'text-align', this.styles.textAlign);
    this.renderer.setStyle(this.el.nativeElement, 'background-color', this.styles.backgroundColor);
    this.renderer.setStyle(this.el.nativeElement, 'z-index', this.styles.zIndex);
    this.renderer.setStyle(this.el.nativeElement, 'border-radius', this.styles.borderRadius);
    this.renderer.setStyle(this.el.nativeElement, 'width', this.styles.width);
    this.renderer.setStyle(this.el.nativeElement, 'height', this.styles.height);
    this.renderer.setStyle(this.el.nativeElement, 'line-height', this.styles.lineHeight);
    this.renderer.setStyle(this.el.nativeElement, 'margin', this.styles.margin);
    this.renderer.setStyle(this.el.nativeElement, 'padding', this.styles.padding);
    this.renderer.setStyle(this.el.nativeElement, 'color', this.styles.color);
    this.renderer.setStyle(this.el.nativeElement, 'display', this.styles.display);
  }

}
