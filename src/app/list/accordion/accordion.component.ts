import { Component, OnInit } from '@angular/core';
import { AccordionGroupComponent } from 'app/list/accordion/accordion-group.component';

@Component({
  selector: 'dl-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css'],
  host: {
    'class': 'panel-group'
  }
})
export class AccordionComponent implements OnInit {
  groups: Array<AccordionGroupComponent> = [];
  constructor() { }

  ngOnInit() {
  }

  closeOthers(openGroup: AccordionGroupComponent): void {
    this.groups.forEach((group: AccordionGroupComponent) => {
      if (group !== openGroup) {
        group.isOpen = false;
      }
    });
  }
  addGroup(group: AccordionGroupComponent): void {
    this.groups.push(group);
  }
  removeGroup(group: AccordionGroupComponent): void {
    const index = this.groups.indexOf(group);
    if (index !== -1) {
      this.groups.splice(index, 1);
    }
  }

}
