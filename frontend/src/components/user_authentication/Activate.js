import React, { Component } from "react";
import { withRouter } from "react-router";
import { axiosInstanceNoAuth } from '../../axiosApi'

class Activate extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.handleActivate()
    }

    handleActivate = async () => {
        const { uid, token } = this.props.match.params
        try {
            const response = await axiosInstanceNoAuth.post(
                '/auth/request_activate/', {
                uid: uid,
                token: token,
            });
            return response;
        } catch (error) {
            console.log(error);
        }
    }

    render() {
        return (
            <div className="activate-page-container auth-page-container">

            </div>
        )
    }
}
export default withRouter(Activate);