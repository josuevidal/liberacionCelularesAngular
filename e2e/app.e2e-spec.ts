import { LiberacionCelularesPage } from './app.po';

describe('liberacion-celulares App', function() {
  let page: LiberacionCelularesPage;

  beforeEach(() => {
    page = new LiberacionCelularesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
