function getFullResponseFromAPI(success) {
    return new Promise((resolve, reject) => {
        if (success) {
            resolve({
                status: 200,
                body: 'Success'
            });
        } else {
            reject(new Error('The fake API is not working currently'));
        }
    });
}

// Tests
getFullResponseFromAPI(true)
    .then(response => console.log(response))  // { status: 200, body: 'Success' }
    .catch(error => console.error(error.message));

getFullResponseFromAPI(false)
    .then(response => console.log(response))
    .catch(error => console.error(error.message)); // "The fake API is not working currently"