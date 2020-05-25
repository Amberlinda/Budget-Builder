import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-builder-1092f.firebaseio.com/'
});

export default instance;