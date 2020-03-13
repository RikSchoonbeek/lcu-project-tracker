import React, { Component } from "react";
import { axiosInstanceNoAuth } from '../../axiosApi'

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "haha",
            password: "aaaaaa1!",
            re_password: "aaaaaa1!",
            email: "rik.progtest@gmail.com"
        };
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit = async (event) => {
        // TODO (riks) this should create a Member (and a user),
        event.preventDefault();
        try {
            const response = await axiosInstanceNoAuth.post('/djoser_auth/users/', {
                username: this.state.username,
                email: this.state.email,
                password: this.state.password,
                re_password: this.state.re_password
            });
            return response;
        } catch (error) {
            console.log(error.stack);
        }
    }

    render() {
        return (
            <div className="signup-page-container auth-page-container">
                <h2>Signup page</h2>
                <form onSubmit={this.handleSubmit} className="signup-form auth-form">
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
                        Email:
                        <input
                            name="email"
                            type="email"
                            value={this.state.email}
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
                    <label>
                        Password confirm:
                        <input
                            name="re_password"
                            type="password"
                            value={this.state.re_password}
                            onChange={this.handleChange}
                        />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}
export default Signup;