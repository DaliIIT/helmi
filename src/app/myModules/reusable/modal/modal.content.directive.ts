import {Directive, ElementRef, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appModalContent]'
})
export class ModalContentDirective implements OnInit{

  modalContentProp = {
    backgroundColor: '#ffff',
    margin: 'auto',
    padding: '1rem',
    border: '1px solid #888',
    width: '80%',
  };

  constructor(private el: ElementRef, private renderer: Renderer2) {
}

  ngOnInit(): void {
    this.renderer.setStyle(this.el.nativeElement, 'background-color', this.modalContentProp.backgroundColor);
    this.renderer.setStyle(this.el.nativeElement, 'margin', this.modalContentProp.margin);
    this.renderer.setStyle(this.el.nativeElement, 'padding', this.modalContentProp.padding);
    this.renderer.setStyle(this.el.nativeElement, 'border', this.modalContentProp.border);
    this.renderer.setStyle(this.el.nativeElement, 'width', this.modalContentProp.width);
  }

}
