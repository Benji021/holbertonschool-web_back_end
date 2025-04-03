import getResponseFromAPI from './0-promise';  // Assure-toi du bon chemin

test('getResponseFromAPI renvoie "Success"', async () => {
    await expect(getResponseFromAPI()).resolves.toBe('Success');
});

test('getFullResponseFromAPI returns an object with status and body', async () => {
    await expect(getFullResponseFromAPI(true)).resolves.toEqual({
        status: 200,
        body: 'Success'
    });
});