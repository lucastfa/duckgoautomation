class HomePage {
    get sloganText() {
        return $('.tag-home__item');
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

    get autoCompleteContainer() {
        return $(".search__autocomplete");
    }

    get autoCompleteSuggestions() {
        return this.autoCompleteContainer.$$(".acp");
    }

    open() {
        browser.url('/');
    }

    openHamburgerMenu() {
        this.hamburgerMenuIcon.waitForDisplayed();
        this.hamburgerMenuIcon.click();
    }

    typeInSearchBox(keyword) {
        this.searchInput.waitForDisplayed();
        this.searchInput.setValue(keyword);
    }

    search(keyword) {
        this.typeInSearchBox(keyword);
        this.searchButton.click();
    }
}

export default new HomePage();
