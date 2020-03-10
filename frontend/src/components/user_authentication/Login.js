import React, { Component } from "react";
import axios from 'axios'
import axiosInstance from "../../axiosApi";
import './AuthStyle.css'


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { username: "rik", password: "Zrnmwu11" };
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit = (event) => {
        event.preventDefault();
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

    render() {
        return (
            <div className="login-page-container auth-page-container">
                <h2>Login page</h2>
                <form onSubmit={this.handleSubmit} className="login-form auth-form">
                    <label>
                        Username:
                        <input
                            name="username"
                            type="text"
                            value={this.state.username}
                            onChange={this.handleChange}
                        />
                    </label>
                    <label>
                        Password:
                        <input
                            name="password"
                            type="password"
                            value={this.state.password}
                            onChange={this.handleChange}
                        />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}
export default Login;