import {Component, Input, OnInit} from '@angular/core';
import {IListItem} from './ilist-item';

@Component({
  selector: 'dl-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.css']
})
export class ItemCardComponent implements OnInit {
  @Input() item: IListItem;
  initialLikes: number;
  isActive = false;

  constructor() {
  }

  ngOnInit() {
    this.initialLikes = this.item.Likes;
  }

  public addLike() {
    if (this.initialLikes === this.item.Likes) {
      this.item.Likes++;
      this.isActive = true;
    } else {
      this.isActive = false;
      this.item.Likes--;
    }
  }
}
