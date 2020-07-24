//*** LogoutComponent.jsx ***\\

import React, { Component } from 'react';
// import AuthenticationService from'./AuthenticationService.js';
// import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

class LogoutComponent extends Component {
    render() {
        return (
            <div>
                <h1>You are logged out</h1> 
                
                <div className="container">
                    Thank You for Using Our Application!
                </div>
            </div>

        )
    }
}

export default LogoutComponent;