import { create } from 'apisauce';

const api = create({
    baseURL: 'https://api.themoviedb.org/',
});

export default api;