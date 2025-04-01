function handleResponseFromAPI(promise) {
    return promise
        .then(() => {
            console.log("Got a response from the API");
            return { status: 200, body: "success" };
        })
        .catch(() => {
            console.log("Got a response from the API");
            return new Error();
        });
}

// Test avec une promesse résolue
handleResponseFromAPI(Promise.resolve())
    .then(response => console.log(response)) // { status: 200, body: 'success' }
    .catch(error => console.error(error));

// Test avec une promesse rejetée
handleResponseFromAPI(Promise.reject())
    .then(response => console.log(response))
    .catch(error => console.error(error)); // Error {}