import { LoginPage } from '../page_object/Login.page'
import { PASSWORD } from '../../../credentials'
import { MainPage } from '../page_object/Main.page'
import { UserModel } from '../model/user.model'
import { userData } from '../data/user.data'
import { createUserModel } from '../model/user.model'

describe ('Login form', () => {
    let loginPage: LoginPage
    let mainPage: MainPage
    const user: UserModel = createUserModel(userData)

    before(async () => {
        loginPage = new LoginPage(browser)
        mainPage = new MainPage(browser)
    })

    beforeEach (async () => {
        await loginPage.open()
    })

    it('user should be log in using login', async () => {
        await loginPage.setLogin(user.login)
        await loginPage.setPassword(user.password)
        await loginPage.submit()

        await mainPage.openUserMenu()
        expect(await mainPage.getUserLoginText()).toEqual(user.login)    
    })

    it('user should be log in using e-mail', async () => {
        await loginPage.setLogin(user.email)
        await loginPage.setPassword(user.password)
        await loginPage.submit()

        await mainPage.openUserMenu()
        expect(await mainPage.getUserLoginText()).toEqual(user.login)
    })

    it('should be displayed an error if the password is wrong', async () => {
        const WRONG_PASSWORD = 'asowds1231'
        await loginPage.setLogin(user.email)
        await loginPage.setPassword(WRONG_PASSWORD)
        await loginPage.submit()

        expect(await loginPage.getAuthErrorAlertText()).toEqual('Incorrect username or password.')            
    })

    it('should be displayed an error if the e-mail is wrong', async () => {
        const WRONG_EMAIL= 'qweasd@asdasd.com'
        await loginPage.setLogin(user.email)
        await loginPage.setPassword(WRONG_EMAIL)
        await loginPage.submit()

        expect(await loginPage.getAuthErrorAlertText()).toEqual('Incorrect username or password.')            
    })

    afterEach(async () => {
        await browser.reloadSession()
    })
    
})