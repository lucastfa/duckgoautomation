import homePage from '../pageobjects/home.page';
import hamburgerMenuSection from '../pageobjects/hamburgerMenu.section';
import searchResultsPage from '../pageobjects/searchResults.page';
import settingsPage from '../pageobjects/settings.page';

describe('Duck duck go search website', () => {

    const searchKeyword = "webdriver.io";

    beforeEach(() => {
        homePage.open();
    });

    it('should have the slogan', () => {
        expect(homePage.sloganText.getText()).toContain("The search engine that doesn't track you.");
    });

    it('should have correct title in the hamburger menu', () => {
        homePage.openHamburgerMenu();
        hamburgerMenuSection.title.waitForClickable();

        expect(hamburgerMenuSection.title.getText()).toBe("SETTINGS");
    });

    it('should search successfully', () => {
        homePage.search(searchKeyword);
        searchResultsPage.resultsContainer.waitForDisplayed();

        expect(searchResultsPage.resultsContainer.getText()).toContain("rouseservices.com");
    });

    it('should have autocomplete suggestions', () => {
        homePage.typeInSearchBox("chromedriver");
        homePage.autoCompleteContainer.waitForDisplayed();

        expect(homePage.autoCompleteSuggestions.length).toBe(8);
    });

    it('should change infinite scrolling option', () => {
        homePage.openHamburgerMenu();
        hamburgerMenuSection.openMenuOption('Other Settings');

        const previousColor = settingsPage.getCurrentInfiniteScrollColor();
        settingsPage.setInfiniteScrolling();

        expect(settingsPage.hasinfiniteScrollColorChanged(previousColor)).toBe(true);
    });
})