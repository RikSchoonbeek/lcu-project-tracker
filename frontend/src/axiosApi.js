import axios from 'axios'


// Login function

export function login() {
    var authOptions = {
        method: 'POST',
        url: 'http://127.0.0.1:8000/auth/token/obtain/',
        data: {
            username: this.state.username,
            password: this.state.password
        },
        headers: {
            'Authorization': "JWT " + localStorage.getItem('access_token'),
            'Content-Type': 'application/json',
            'accept': 'application/json'
        }
    };

    axios(authOptions)
        .then(function (response) {
            localStorage.setItem('access_token', response.data.access);
            localStorage.setItem('refresh_token', response.data.refresh);
        })
        .catch(function (error) {
            console.log(error);
        })
}