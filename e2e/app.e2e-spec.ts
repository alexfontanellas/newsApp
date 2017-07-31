import { MyNewsAppPage } from './app.po';

describe('my-news-app App', () => {
  let page: MyNewsAppPage;

  beforeEach(() => {
    page = new MyNewsAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
