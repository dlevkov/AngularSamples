import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'dl-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public Title = 'This is Header';

  constructor() {
  }

  ngOnInit() {
  }

}
