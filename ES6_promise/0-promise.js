function getResponseFromAPI() {
    return new Promise((resolve, reject) => {
        // Simule une requête API
        setTimeout(() => {
            const success = true; // Replace with a real condition if necessary
            if (success) {
                resolve("Success: Data received from API");
            } else {
                reject(new Error("Failed to fetch data from API"));
            }
        }, 1000); // Simulate a 1 second delay
    });
}