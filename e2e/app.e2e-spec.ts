import { PathTesterPage } from './app.po';

describe('path-tester App', () => {
  let page: PathTesterPage;

  beforeEach(() => {
    page = new PathTesterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
