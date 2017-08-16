import { CmsInventoryPage } from './app.po';

describe('cms-inventory App', () => {
  let page: CmsInventoryPage;

  beforeEach(() => {
    page = new CmsInventoryPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
