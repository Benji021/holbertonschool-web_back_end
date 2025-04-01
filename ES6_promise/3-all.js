import { uploadPhoto, createUser } from './utils';

function handleProfileSignup() {
    Promise.all([uploadPhoto(), createUser()])
        .then(([photoResponse, userResponse]) => {
            console.log(`${userResponse.body.firstName} ${userResponse.body.lastName}`);
        })
        .catch(() => {
            console.log('Signup system offline');
        });
}