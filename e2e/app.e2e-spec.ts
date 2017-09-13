import { BaseballPracticePage } from './app.po';

describe('baseball-practice App', () => {
  let page: BaseballPracticePage;

  beforeEach(() => {
    page = new BaseballPracticePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
