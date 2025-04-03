import getResponseFromAPI from './0-promise';  // Assure-toi du bon chemin

test('getResponseFromAPI renvoie "Success"', async () => {
    await expect(getResponseFromAPI()).resolves.toBe('Success');
});

import { getFullResponseFromAPI } from './1-promise'; // Si c'est dans un autre fichier

test('getFullResponseFromAPI renvoie un objet avec statut et corps', async () => {
    await expect(getFullResponseFromAPI()).resolves.toEqual({ status: 200, body: 'Success' });
});