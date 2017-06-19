import { Component, OnDestroy, Input, trigger, state, style, transition, animate } from '@angular/core';
import { AccordionComponent } from 'app/list/accordion/accordion.component';

@Component({
  selector: 'dl-accordion-group',
  templateUrl: './accordion-group.component.html',
  styleUrls: ['./accordion-group.component.css'],
  animations: [
    trigger('focusPanel', [
      state('inactive', style({
        transform: 'scale(0.8)',
        backgroundColor: '#eee'
      })),
      state('active', style({
        transform: 'scale(1.0)',
        backgroundColor: '#cfd8dc'
      })),
      transition('inactive => active', animate('100ms ease-in')),
      transition('active => inactive', animate('100ms ease-out'))
    ]),
  ]
})
export class AccordionGroupComponent implements OnDestroy {
  private _isOpen = false;
  icon_content = 'arrow_drop_down';
  state = 'inactive';
  @Input() heading: string;

  @Input()
  set isOpen(value: boolean) {
    this._isOpen = value;
    if (value) {
      this.accordion.closeOthers(this);
    }
  }

  get isOpen() {
    return this._isOpen;
  }
  constructor(private accordion: AccordionComponent) {
    this.accordion.addGroup(this);
  }

  toggleOpen(event: MouseEvent): void {
    event.preventDefault();
    this.isOpen = !this.isOpen;
    this.state = (this.state === 'inactive' ? 'active' : 'inactive');
    this.icon_content = (this.icon_content === 'arrow_drop_down' ? 'arrow_drop_up' : 'arrow_drop_down');
  }

  ngOnDestroy() {
    this.accordion.removeGroup(this);
  }

}
