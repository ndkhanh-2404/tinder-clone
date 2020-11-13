import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://new-app-tinder-backend.herokuapp.com',
});

export default instance;