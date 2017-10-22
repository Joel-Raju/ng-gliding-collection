import { NgGlidingCollectionPage } from './app.po';

describe('ng-gliding-collection App', () => {
  let page: NgGlidingCollectionPage;

  beforeEach(() => {
    page = new NgGlidingCollectionPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
