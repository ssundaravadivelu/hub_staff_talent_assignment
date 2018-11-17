export function createGetRequest(url) {
   let myInit = { method: 'GET',
                   headers: {
                    Accept: 'application/json'
                  }};
    // Create our request constructor with all the parameters we need
    return new Request(url, myInit);
}
