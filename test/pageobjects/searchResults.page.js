class SearchResultsPage {
    get resultsContainer() {
        return $(".results--main");
    }

    get searchInput() {
        return $("#search_form_input");
    }
}

export default new SearchResultsPage();
