import {Directive, ElementRef, HostListener, Input, OnInit, Renderer2} from '@angular/core';
import {BUTTON} from './inerfaces/btn.interface';

@Directive({
  selector: '[appReusBtn]'
})
export class ReusBtnDirective implements OnInit {

  @Input('appReusBtn') appReusBtn: string;
  @Input('btn-change') btnProps: BUTTON = {
    fontSize: '1em',
    display: 'inline-block',
    margin: '0.2em',
    padding: '0.5em 0.5em',
    textAlign: 'center',
    borderRadius: '0.5em',
    textDecoration: 'none',
    border: '0.1px',
    color: 'white',
  };

  // here u set all btns colors on DEFAULT and on HOVER
  btnColors = {
    primary: {
      def: '#2E75B1',
      hover: '#265D8C'
    },
    danger: {
      def: '#E73654',
      hover: '#D70035'
    },
  };

  constructor(private renderer: Renderer2, private el: ElementRef) {
  }


  ngOnInit(): void {

    this.renderer.setStyle(this.el.nativeElement, 'font-size', this.btnProps.fontSize);
    this.renderer.setStyle(this.el.nativeElement, 'display', this.btnProps.display);
    this.renderer.setStyle(this.el.nativeElement, 'margin', this.btnProps.margin);
    this.renderer.setStyle(this.el.nativeElement, 'padding', this.btnProps.padding);
    this.renderer.setStyle(this.el.nativeElement, 'text-align', this.btnProps.textAlign);
    this.renderer.setStyle(this.el.nativeElement, 'border-radius', this.btnProps.borderRadius);
    this.renderer.setStyle(this.el.nativeElement, 'text-decoration', this.btnProps.textDecoration);
    this.renderer.setStyle(this.el.nativeElement, 'border', this.btnProps.border);
    this.renderer.setStyle(this.el.nativeElement, 'color', this.btnProps.color);

    if (this.appReusBtn !== null && this.btnColors[this.appReusBtn] !== null) {
      this.renderer.setStyle(this.el.nativeElement, 'background-color', this.btnColors[this.appReusBtn].def);
    }

  }

  @HostListener('mouseover') onMouseOver() {
    if (this.appReusBtn !== null && this.btnColors[this.appReusBtn] !== null) {
      this.renderer.setStyle(this.el.nativeElement, 'background-color', this.btnColors[this.appReusBtn].hover);
    }
  }

  @HostListener('mouseout') onMouseOut() {
    if (this.appReusBtn !== null && this.btnColors[this.appReusBtn] !== null) {
      this.renderer.setStyle(this.el.nativeElement, 'background-color', this.btnColors[this.appReusBtn].def);
    }
  }

  @HostListener('window:resize') onResize() {
    if (window.innerWidth < 700 || (window.innerWidth < 1209 && window.innerWidth > 881)) {

      this.renderer.setStyle(this.el.nativeElement, 'padding', '0.5em 0.1em');
    }
  }
}
