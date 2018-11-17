import { createGetRequest } from './ApiHelper';

class SearchApi {

    static getAllData() {
        const url = 'http://localhost:4000/jobdescriptions/';
        const request = createGetRequest(url);
        return fetch(request).then((response) => {
            if (response.ok) {
                return response.json().then(json => {
                    return json;
                });
            }
        });
    }
}
export default SearchApi;