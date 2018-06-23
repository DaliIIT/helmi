import {Directive, ElementRef, HostListener, OnInit, Renderer2} from '@angular/core';
import {MODAL} from './interfaces/modal.interface';
import {CLOSE} from './interfaces/modal.close.interface';

@Directive({
  selector: '[appModal]'
})
export class ModalDirective implements OnInit {

  modalProp: MODAL = {
    position: 'fixed',
    zIndex: '999999',
    paddingTop: '10vw',
    left: '0',
    top: '0',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.6)',
    overflow: 'auto',
    display : 'none'
  };
  closeProp: CLOSE = {
    backgroundColor: 'white',
    borderRadius: '30px',
    padding: '0.3rem',
    marginTop: '-7%',
    marginRight: '7.5%',
    display: 'block',
    color: 'dodgerblue',
    float: 'right',
    fontSize: '1.3rem',
    fontWeight: 'bold',
  };

  child: any;

  constructor(private el: ElementRef, private renderer: Renderer2) {
  }

  ngOnInit(): void {
    this.createModal();
    this.createClose();
  }


  createModal() {
    this.renderer.setStyle(this.el.nativeElement, 'position', this.modalProp.position);
    this.renderer.setStyle(this.el.nativeElement, 'z-index', this.modalProp.zIndex);
    this.renderer.setStyle(this.el.nativeElement, 'padding-top', this.modalProp.paddingTop);
    this.renderer.setStyle(this.el.nativeElement, 'left', this.modalProp.left);
    this.renderer.setStyle(this.el.nativeElement, 'top', this.modalProp.top);
    this.renderer.setStyle(this.el.nativeElement, 'width', this.modalProp.width);
    this.renderer.setStyle(this.el.nativeElement, 'height', this.modalProp.height);
    this.renderer.setStyle(this.el.nativeElement, 'background-color', this.modalProp.backgroundColor);
    this.renderer.setStyle(this.el.nativeElement, 'overflow', this.modalProp.overflow);
    this.renderer.setStyle(this.el.nativeElement, 'display', this.modalProp.display);
  }

  createClose() {

    this.child = this.renderer.createElement('button');
    const text = this.renderer.createText('x');
    this.renderer.appendChild(this.child, text);
    this.renderer.setProperty(this.child, 'value', 'modal-close-btn');

    this.renderer.setStyle(this.child, 'background-color', this.closeProp.backgroundColor);
    this.renderer.setStyle(this.child, 'border-radius', this.closeProp.borderRadius);
    this.renderer.setStyle(this.child, 'padding', this.closeProp.padding);
    this.renderer.setStyle(this.child, 'margin-top', this.closeProp.marginTop);
    this.renderer.setStyle(this.child, 'margin-right', this.closeProp.marginRight);
    this.renderer.setStyle(this.child, 'display', this.closeProp.display);
    this.renderer.setStyle(this.child, 'color', this.closeProp.color);
    this.renderer.setStyle(this.child, 'font-size', this.closeProp.fontSize);
    this.renderer.setStyle(this.child, 'font-weight', this.closeProp.fontWeight);
    this.renderer.setStyle(this.child, 'float', this.closeProp.float);
    this.renderer.setStyle(this.child, 'border', 'none');
    this.renderer.setStyle(this.child, 'cursor', 'pointer');

    this.renderer.appendChild(this.el.nativeElement, this.child);
  }

  @HostListener('click', ['$event']) onClick(event) {
    if (event.target.value === 'modal-close-btn') {
      this.renderer.setStyle(this.el.nativeElement, 'display', 'none');
    }
  }

  @HostListener('mouseover', ['$event']) onMouseOver(event) {
    if (event.target.value === 'modal-close-btn') {
      this.renderer.setStyle(this.child, 'color', 'aqua');
    }
  }

  @HostListener('mouseout', ['$event']) onMouseOut(event) {
    if (event.target.value === 'modal-close-btn') {
      this.renderer.setStyle(this.child, 'color', this.closeProp.color);
    }
  }
}
