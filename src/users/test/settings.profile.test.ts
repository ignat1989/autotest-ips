import { LoginPage } from '../../../../users/page_object/Login.page'
import { PersonalProfilePage } from '../page-object/PersonalProfile.page'
import { ProfileSettingsPage } from '../page-object/ProfileSettings.page'
import { BIO, EMAIL, LOGIN, PASSWORD, PRONOUNS, PUBLIC_PROFILE_NAME } from '../../../../../credentials'


describe ('Profile settings', () => {
    let loginPage: LoginPage
    let profileSettingsPage: ProfileSettingsPage
    let personalProfilePage: PersonalProfilePage

    before(async () => {
        loginPage = new LoginPage(browser)
        profileSettingsPage = new ProfileSettingsPage(browser)
        personalProfilePage = new PersonalProfilePage(browser)
        await loginPage.open()
        await loginPage.login(LOGIN, PASSWORD)
    })

    beforeEach (async () => {
        await profileSettingsPage.open()
    })

    it('username should be shown on personal page', async () => {
        await profileSettingsPage.updatePublicProfileName(PUBLIC_PROFILE_NAME)

        await profileSettingsPage.open()
        expect(await personalProfilePage.getPersonalProfilePageNameText()).toEqual(PUBLIC_PROFILE_NAME);   
    })

    it('bio should be shown on personal page', async () => {
        await profileSettingsPage.updatePublicProfileBio(BIO)

        await personalProfilePage.openPersonalPage()
        expect(await personalProfilePage.getPersonalPageBioText()).toEqual(BIO)
    })

    it('pronouns should be shown on personal page', async () => {
        await profileSettingsPage.updatePublicProfilePronouns(PronounsType.HE_HIM)
        
        await personalProfilePage.openPersonalPage()
        expect(await personalProfilePage.getPersonalPagePronounsText()).toEqual(PRONOUNS)
    })

    it('email should be shown on personal page', async () => {
        await profileSettingsPage.updatePublicProfileEmail()

        await personalProfilePage.openPersonalPage()
        expect(await personalProfilePage.getPersonalPageEmailText()).toEqual(EMAIL)
    })

    after(async () => {
        await browser.reloadSession()
    })
})