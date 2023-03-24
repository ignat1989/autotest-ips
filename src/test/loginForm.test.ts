import { LOGIN, PASSWORD, EMAIL } from '../../credentials';



describe('Login form test', async () => {
  beforeEach(async () => {
    await browser.url('https://github.com/login');
  });

  it('user should be log in using username', async () => {
    await browser.$('//*[@id="login_field"]').waitForDisplayed({
      timeoutMsg: 'Login field was not displayed',
    });

    await browser.$('//*[@id="login_field"]').setValue(LOGIN);
    await browser.$('//*[@id="password"]').setValue(PASSWORD);
    await browser.$('//*[@type="submit"]').waitForClickable({
      timeoutMsg: 'Login button was not clickable'
    });

    await browser.$('//*[@type="submit"]').click();

    await browser
      .$('//summary//*[contains(@class, "avatar")]')
      .waitForDisplayed({
        timeoutMsg: 'Avatar was not displayed'
      });
    await browser.$('//summary//*[contains(@class, "avatar")]').click();

    expect(
      await browser.$('//*[@class="css-truncate-target"]').getText()
    ).toEqual(LOGIN);
  });

  it('user should be log in using e-mail', async () => {
    await browser.$('//*[@id="login_field"]').waitForDisplayed({
      timeoutMsg: 'Login field was not displayed'
    });

    await browser.$('//*[@id="login_field"]').setValue(EMAIL);
    await browser.$('//*[@id="password"]').setValue(PASSWORD);
    await browser.$('//*[@type="submit"]').waitForClickable({
      timeoutMsg: 'Login button was not clickable'
    });
    await browser.$('//*[@type="submit"]').click();

    await browser
      .$('//summary//*[contains(@class, "avatar")]')
      .waitForDisplayed({
        timeoutMsg: 'Avatar was not displayed'
      });
    await browser.$('//summary//*[contains(@class, "avatar")]').click();

    expect(
      await browser.$('//*[@class="css-truncate-target"]').getText()
    ).toEqual(LOGIN);
  });

  it('should be displayed an error if the password is wrong', async () => {
    await browser.$('//*[@id="login_field"]').waitForDisplayed({
      timeoutMsg: 'Login field was not displayed'
    });

    await browser.$('//*[@id="login_field"]').setValue(EMAIL)
    await browser.$('//*[@id="password"]').setValue('asdqwewqa123')
    await browser.$('//*[@type="submit"]').waitForClickable({
      timeoutMsg: 'Login button was not clickable'
    });

    await browser.$('//*[@type="submit"]').click();

    expect(await browser.$('//*[@id="js-flash-container"]').getText()).toEqual(
      'Incorrect username or password.'
    );
  });

  it('should be displayed an error if the e-mail is wrong', async () => {
    await browser.$('//*[@id="login_field"]').waitForDisplayed({
      timeoutMsg: 'Login field was not displayed'
    });

    await browser.$('//*[@id="login_field"]').setValue('qweasd@asdasd.com');
    await browser.$('//*[@id="password"]').setValue(PASSWORD);
    await browser.$('//*[@type="submit"]').waitForClickable({
      timeoutMsg: 'Login button was not clickable'
    });

    await browser.$('//*[@type="submit"]').click();

    expect(await browser.$('//*[@id="js-flash-container"]').getText()).toEqual(
      'Incorrect username or password.'
    );
  });

  afterEach(async () => {
    await browser.reloadSession();
  });
});
