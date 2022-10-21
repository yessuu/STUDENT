import { Directive, ElementRef, Renderer2, OnInit, Input } from '@angular/core';

@Directive({
  selector: '[appBooleanIcons]'
})
export class BooleanIconsDirective {
  @Input('appBooleanIcons') inscripciones!: boolean

  constructor(private elemento: ElementRef,
    private renderer: Renderer2) {

     }
     ngOnInit(): void{
      this.renderer.setStyle(this.elemento.nativeElement, 'padding', '0px 10px 0px 10px');
      this.renderer.setStyle(this.elemento.nativeElement, 'border-radius', '20px');
      this.renderer.setStyle(this.elemento.nativeElement, 'color', 'red'),
      this.renderer.setStyle(
        this.elemento.nativeElement, 'background-color', this.inscripciones ? 'pink': 'green')

}
}