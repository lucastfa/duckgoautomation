class SettingsPage {
    get infiniteScrollToggle() {
        return $("label[for='setting_kav']");
    }

    setInfiniteScrolling() {
        this.infiniteScrollToggle.waitForClickable();
        this.infiniteScrollToggle.click();
    }

    hasinfiniteScrollColorChanged(previousColor) {
        return this.infiniteScrollToggle.getCSSProperty('background-color').value !== previousColor;
    }

    getCurrentInfiniteScrollColor() {
        this.infiniteScrollToggle.waitForExist();
        return this.infiniteScrollToggle.getCSSProperty('background-color').value;
    }
}

export default new SettingsPage();
