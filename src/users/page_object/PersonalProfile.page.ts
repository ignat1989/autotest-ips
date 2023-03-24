import {ChainablePromiseElement} from 'webdriverio'

class PersonalProfilePage {
    protected browser: WebdriverIO.Browser
    protected url = 'https://github.com/ignat1989'

    constructor(browser: WebdriverIO.Browser) {
        this.browser = browser
    }

    public getPersonalProfilePageBioText(): Promise<string> {
        return this.getPersonalProfilePageBio().getText()
    }

    public getPersonalProfilePageEmailText(): Promise<string> {
        return this.getPersonalProfilePageEmail().getText()
    }

    public getPersonalProfilePageNameText(): Promise<string> {
        return this.getPersonalProfilePageName().getText()
    }

    public getPersonalProfilePagePronounsText(): Promise<string> {
        return this.getPersonalProfilePagePronouns().getText()
    }

    public async openPersonalPage(): Promise<void> {
        await this.browser.url(this.url)
    }

    private getPersonalProfilePageName(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//*[@class="p-name vcard-fullname d-block overflow-hidden"]')
    }

    private getPersonalProfilePageBio(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//*[@class="p-note user-profile-bio mb-3 js-user-profile-bio f4"]')
    }

    private getPersonalProfilePagePronouns(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//*[@itemprop="pronouns"]')
    }

    private getPersonalProfilePageEmail(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//*[@class="Link--primary"]')
    }
}

export {
    PersonalProfilePage
}