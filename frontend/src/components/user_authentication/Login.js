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

    handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axiosInstance.post('/auth/token/obtain/', {
                username: this.state.username,
                password: this.state.password
            });
            axiosInstance.defaults.headers['Authorization'] = "JWT " + response.data.access;
            localStorage.setItem('access_token', response.data.access);
            localStorage.setItem('refresh_token', response.data.refresh);
            // return response.data;
        } catch (error) {
            console.log("error in Login.handleSubmit()", error)
            throw error;
        }
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