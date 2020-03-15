class HomePage {
    get thirdPanelTitle() {
        return $('.js-onboarding-ed-slide-3 .onboarding-ed__title');
    }

    get hamburgerMenuIcon() {
        return $('.js-side-menu-open');
    }

    get searchInput() {
        return $("#search_form_input_homepage");
    }

    get searchButton() {
        return $("#search_button_homepage");
    }

    open() {
        browser.url('/');
    }

    openHamburgerMenu() {
        this.hamburgerMenuIcon.waitForDisplayed();
        this.hamburgerMenuIcon.click();
    }

    search(keyword) {
        this.searchInput.waitForDisplayed();
        this.searchInput.setValue(keyword);
        this.searchButton.click();
    }
}

export default new HomePage();
