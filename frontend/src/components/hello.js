import React, { Component } from "react";
import axios from 'axios'

class Hello extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: "",
        };
    }

    componentDidMount() {
        // It's not the most straightforward thing to run an async method in componentDidMount

        // Version 1 - no async: Console.log will output something undefined.
        const messageData1 = this.getMessage();
        console.log("messageData1: ", JSON.stringify(messageData1, null, 4));
    }

    getMessage = () => {
        var authOptions = {
            method: 'GET',
            url: 'http://127.0.0.1:8000/auth/hello/',
            headers: {
                'Authorization': "JWT " + localStorage.getItem('access_token'),
                'Content-Type': 'application/json',
                'accept': 'application/json'
            }
        };

        axios(authOptions)
            .then(response => {
                console.log("this", this)
                const message = response.data.hello;
                this.setState({
                    message: message,
                });
            })
            .catch(function (error) {
                console.log("Error: ", JSON.stringify(error, null, 4));
                throw error;
            })
    }

    render() {
        return (
            <div>
                <p>{this.state.message}</p>
            </div>
        )
    }
}

export default Hello;