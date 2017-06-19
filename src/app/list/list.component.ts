import { Component, OnInit } from '@angular/core';
import { IListItem } from './ilist-item';

const items: Array<IListItem> = [
  {
    title: 'Windward',
    subTitle: 'Looking for better company or docgen app?',
    twitterHash: 'windwardstudios',
    picUrl: 'https://pbs.twimg.com/media/C1-1Tz5UoAA_pdt.jpg',
    Likes: 0
  },
  {
    title: 'AngularJs News',
    subTitle: 'Right Relevance: Influences, Articles and Conversations',
    twitterHash: 'angularjs_news',
    picUrl: 'https://pbs.twimg.com/profile_images/716053815133356032/UIW3xmYm.jpg',
    Likes: 5
  },
  {
    title: 'UX & Bootstrap',
    subTitle: '10 Reasons Why Web Project Fail',
    twitterHash: '3rdwave',
    picUrl: 'https://pbs.twimg.com/media/Bza88n6IMAAP_D4.png',
    Likes: 1
  }
];

@Component({
  selector: 'dl-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit {
  public viewMode = 'map';
  public gridItems: IListItem[] = [];

  ngOnInit() {
    this.gridItems = items;
  }

}
