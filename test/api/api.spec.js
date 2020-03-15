import axios from 'axios';

const BASE_URL = "https://api.duckduckgo.com/";

describe('Duck duck go API', () => {
    it('should print all Icon urls', () => {
        axios.get(BASE_URL + '?q=simpsons+characters&format=json&pretty=1')
            .then((response) => {
                response.data.RelatedTopics.forEach(relatedTopic => {
                    if(relatedTopic.Icon.URL) {
                        console.log(relatedTopic.Icon.URL);
                    }
                });
            });
    });
});



