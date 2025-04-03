import getResponseFromAPI from './0-promise';  // Assure-toi du bon chemin

test('getResponseFromAPI renvoie "Success"', async () => {
    await expect(getResponseFromAPI()).resolves.toBe('Success');
});
