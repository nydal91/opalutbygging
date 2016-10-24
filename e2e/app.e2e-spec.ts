import { OpalutbyggingPage } from './app.po';

describe('opalutbygging App', function() {
  let page: OpalutbyggingPage;

  beforeEach(() => {
    page = new OpalutbyggingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
