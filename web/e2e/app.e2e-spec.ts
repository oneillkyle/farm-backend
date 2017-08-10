import { FarmPage } from './app.po';

describe('farm App', () => {
  let page: FarmPage;

  beforeEach(() => {
    page = new FarmPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
