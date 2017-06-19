import {Directive, ElementRef, Input, OnChanges, OnInit, Renderer2} from '@angular/core';
import {IListItem} from '../list/ilist-item';

@Directive({
  selector: '[dlHighlight]'
})
export class HighlightDirective implements OnChanges, OnInit {
  @Input() item: IListItem;
  isActive: boolean;
  constructor(private el: ElementRef, private _renderer: Renderer2) {
  }

  ngOnChanges(): void {
    console.log(this.isActive);
    this.setActive();
  }

  ngOnInit() {
    this.setActive();
  }

  private setActive() {
    this.isActive = this.item.Likes > 0;
    console.log(this.isActive);
    if (this.isActive) {
      this._renderer.addClass(this.el.nativeElement, 'true');
    } else {
      this._renderer.removeClass(this.el.nativeElement, 'true');
    }
  }
}
