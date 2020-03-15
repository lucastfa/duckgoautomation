class HamburgerMenuSection {
    get title() {
        return $(".nav-menu__heading span");
    }

    getMenuOption(name) {
        return $(`a=${name}`);
    }

    openMenuOption(name) {
        this.getMenuOption(name).waitForClickable();
        this.getMenuOption(name).click();
    }
}

export default new HamburgerMenuSection();
