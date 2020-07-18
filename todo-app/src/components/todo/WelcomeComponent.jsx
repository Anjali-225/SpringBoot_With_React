import React, { Component } from 'react';
// import AuthenticationService from'./AuthenticationService.js';
import { BrowserRouter as Link } from "react-router-dom";
import HelloWorldService from '../../api/todo/HelloWorldService.js';

class WelcomeComponent extends Component {

    constructor(props) {
        super(props);
        this.retrieveWelcomeMessage = this.retrieveWelcomeMessage.bind(this);
    }

    render() {
        return(
            <div>   
                <h1>Welcome!</h1> 
                
                <div className="container">
                    Welcome {this.props.match.params.name}. 
                    You can manage your todos <Link to="/todos">here</Link>.
                </div>

                <div className="container">
                    Click here to get a customize welcome message. 
                    <button onClick={this.retrieveWelcomeMessage} 
                        className="btn btn-success"> Get Welcome Message</button>
                </div>

            </div>
        )
    }

    retrieveWelcomeMessage() {
        // console.log('retrieve clicked');
        HelloWorldService.executeHelloWorldService()
        .then( response => console.log(response) )

    }

}

export default WelcomeComponent;