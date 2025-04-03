import getResponseFromAPI from './0-promise';

test('getResponseFromAPI renvoie "Success"', async () => {
    await expect(getResponseFromAPI()).resolves.toBe('Success');
});
