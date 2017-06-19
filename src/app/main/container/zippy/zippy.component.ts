import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dl-zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.css']
})
export class ZippyComponent implements OnInit {
 isGroupOpen = false;

    groups: Array<any> = [
        {
            heading: 'Angular2Accordion Dynamic Content A',
            content: ' I’m a dynamic content to show in angular 2 accordion : )'
        },
        {
            heading: 'Angular2Accordion Dynamic Content B',
            content: 'I’m a dynamic content to show in angular 2 accordion : )'
        },
        {
            heading: 'Angular2Accordion HTML Content C',
            content: 'I’m a dynamic content to show in angular 2 accordion : ) '
        }
    ];
  constructor() { }

  ngOnInit() {
  }

}
