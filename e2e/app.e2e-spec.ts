import { Bio2Page } from './app.po';

describe('bio2 App', function() {
  let page: Bio2Page;

  beforeEach(() => {
    page = new Bio2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
