import { TwitterLikeListPage } from './app.po';

describe('twitter-like-list App', () => {
  let page: TwitterLikeListPage;

  beforeEach(() => {
    page = new TwitterLikeListPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('dl works!');
  });
});
