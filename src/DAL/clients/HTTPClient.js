import axios from 'axios';

const api = axios.create({
    baseURL: 'https://dev.api.valoaneducator.tv/v1/auth'
});

api.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response && error.response.status === 401) {
            return Promise.reject(error);
        }
    }
);
 export default api;