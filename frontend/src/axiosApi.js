import axios from 'axios'


const axiosInstance = axios.create({
    baseURL: 'http://127.0.0.1:8000/',
    timeout: 5000,
    headers: {
        'Authorization': "JWT " + localStorage.getItem('access_token'),
        'Content-Type': 'application/json',
        'accept': 'application/json'
    }
});

// This is used to automatically get a new access token (and refresh token? I
// am not sure about that) when a request fails because the stored access token
// (in local storage) has expired.
// source: https://hackernoon.com/110percent-complete-jwt-authentication-with-django-and-react-2020-iejq34ta
axiosInstance.interceptors.response.use(
    response => response,
    error => {
        const originalRequest = error.config;

        if (error.response.status === 401 && error.response.statusText === "Unauthorized") {
            const refresh_token = localStorage.getItem('refresh_token');

            return axiosInstance
                .post('/auth/token/refresh/', { refresh: refresh_token })
                .then((response) => {

                    localStorage.setItem('access_token', response.data.access);
                    localStorage.setItem('refresh_token', response.data.refresh);

                    axiosInstance.defaults.headers['Authorization'] = "JWT " + response.data.access;
                    originalRequest.headers['Authorization'] = "JWT " + response.data.access;

                    return axiosInstance(originalRequest);
                })
                .catch(err => {
                    console.log(err)
                });
        }
        return Promise.reject(error);
    }
);


export const axiosInstanceNoAuth = axios.create({
    baseURL: 'http://127.0.0.1:8000/',
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json',
        'accept': 'application/json'
    }
});

export default axiosInstance