import getResponseFromAPI from './0-promise';  // Assure-toi du bon chemin

test('getResponseFromAPI renvoie "Success"', async () => {
    await expect(getResponseFromAPI()).resolves.toBe('Success');
});

// Tests 1-promise.js
getFullResponseFromAPI(true)
    .then(response => console.log(response))  // { status: 200, body: 'Success' }
    .catch(error => console.error(error.message));

getFullResponseFromAPI(false)
    .then(response => console.log(response))
    .catch(error => console.error(error.message)); // "The fake API is not working currently"
