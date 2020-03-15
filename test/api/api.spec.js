import axios from 'axios';

describe('Duck duck go API', () => {
    const BASE_URL = "https://api.duckduckgo.com/";

    it('should print all Icon urls', async () => {
        const response = await axios.get(BASE_URL + '?q=simpsons+characters&format=json&pretty=1');
        response.data.RelatedTopics.forEach(relatedTopic => {
            if(relatedTopic.Icon.URL) {
                console.log(relatedTopic.Icon.URL);
            }
        });
    });
});



