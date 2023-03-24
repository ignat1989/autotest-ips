import {ChainablePromiseElement} from 'webdriverio'
import { PUBLIC_PROFILE_NAME, BIO } from '../../../../../credentials'
import { PronounsType } from '../test/settings.profile.test'

class ProfileSettingsPage {
    protected browser: WebdriverIO.Browser
    protected url = 'https://github.com/settings/profile'

    constructor(browser: WebdriverIO.Browser) {
        this.browser = browser
    }

    public async open(): Promise<void> {
        await this.browser.url(this.url)
    }

    public async updatePublicProfileName(publicName: string): Promise<void> {
        await this.setPublicProfileName(publicName)
        await this.update()
    }

    public async updatePublicProfileBio(bio: string): Promise<void> {
        await this.setPublicProfileBio(bio)
        await this.update()
    }

    public async updatePublicProfilePronouns(): Promise<void> {
        await this.setPublicProfilePronouns()
        await this.update()
    }

    public async updatePublicProfileEmail(): Promise<void> {
        await this.setPublicProfileEmail()
        await this.update()
    }

    public getUpdateAlertText(): Promise<string> {
        return this.getPublicProfileUpdateAlert().getText()
    }
    
    private async setPublicProfileName(name: string): Promise<void> {
        await this.getPublicProfileNameField().waitForDisplayed({
            timeoutMsg: 'Name field was not displayed'
        })
        await this.getPublicProfileNameField().setValue(name)
    }

    private async setPublicProfileBio(bio: string): Promise<void> {
        await this.getPublicProfileBioField().waitForDisplayed({
            timeoutMsg: 'field Bio was not displayed'
        })
        await this.getPublicProfileBioField().setValue(bio)
    }

    private async setPublicProfilePronouns(): Promise<void> {
        await this.getPublicProfilePronounsField().waitForClickable({
            timeoutMsg: 'field Pronouns was not clickable'
        })
        await this.getPublicProfilePronounsField().click()

        await this.getProfilePronounsOption().waitForClickable({
            timeoutMsg: 'Pronouns options was not clickable'
        })
        await this.getProfilePronounsOption().click()
    }

    private async setPublicProfileEmail(): Promise<void> {
        await this.getPublicProfileEmailField().waitForDisplayed({
            timeoutMsg: 'field Email was not displayed'
        })
        await this.getPublicProfileEmailField().click()
        await this.getPublicProfileEmailOption().click()
    }

    private async update(): Promise<void> {
        await this.getUpdatePublicProfileButton().waitForClickable({
            timeoutMsg: 'Update button was not clickable'
        })
        await this.getUpdatePublicProfileButton().click()
    }

    private getPublicProfileNameField(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//*[@id="user_profile_name"]')
    }

    private getPublicProfileEmailField(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//*[@id="user_profile_email"]')
    }

    private getPublicProfileEmailOption(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//*[@value="givanovignat@gmail.com"]')
    }

    private getPublicProfileBioField(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//*[@id="user_profile_bio"]')
    }

    private getPublicProfilePronounsField(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//*[@id="user_profile_pronouns_select"]')
    }

    private getProfilePronounsOption(pronounsType: PronounsType): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$(`'//[@value="${pronounsType}"]'`)
    }

    private getUpdatePublicProfileButton(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//*[@class="Button-label"]')
    }

    private getPublicProfileUpdateAlert(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//*[@class="js-flash-alert"]')
    }
}

export {
    ProfileSettingsPage
}