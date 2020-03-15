import homePage from '../pageobjects/home.page';
import hamburgerMenuSection from '../pageobjects/hamburgerMenu.section';
import searchResultsPage from '../pageobjects/searchResults.page';
import settingsPage from '../pageobjects/settings.page';

describe('Duck duck website', () => {

    const searchKeyword = "webdriver.io";

    beforeEach(() => {
        homePage.open();
    });

    it('should have the slogan', () => {
        expect(homePage.thirdPanelTitle.getText()).toBe("We don’t track you in or out\nof private browsing mode.");
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

    it('should have the correct placeholder', () => {
        homePage.search(searchKeyword);
        searchResultsPage.searchInput.waitForDisplayed();
        
        expect(searchResultsPage.searchInput.getValue()).toBe(searchKeyword);
    });

    it('should change infinite scrolling option', () => {
        homePage.openHamburgerMenu();
        hamburgerMenuSection.openMenuOption('Other Settings');

        const previousColor = settingsPage.getCurrentInfiniteScrollColor();
        settingsPage.setInfiniteScrolling();

        expect(settingsPage.hasinfiniteScrollColorChanged(previousColor)).toBe(true);
    });
})