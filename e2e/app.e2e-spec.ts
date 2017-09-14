import { CodePicturesNewPage } from './app.po';

describe('code-pictures-new App', function() {
  let page: CodePicturesNewPage;

  beforeEach(() => {
    page = new CodePicturesNewPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
