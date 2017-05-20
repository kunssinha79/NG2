import { CompoProjectPage } from './app.po';

describe('compo-project App', function() {
  let page: CompoProjectPage;

  beforeEach(() => {
    page = new CompoProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
