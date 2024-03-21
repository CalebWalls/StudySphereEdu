import { StudySphereEduPage } from './app.po';

describe('study-sphere-edu App', function() {
  let page: StudySphereEduPage;

  beforeEach(() => {
    page = new StudySphereEduPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
