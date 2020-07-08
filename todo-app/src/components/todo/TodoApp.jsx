import React, { Component } from 'react';

class TodoApp extends Component {
    render() {
        return (
            <div className="TodoApp">
                <LoginComponent />
            </div>
        )
    }
}

class LoginComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            username: 'in28minutes',
            password: '',
            hasLoginFailed: false,
            showSuccessMessage: false
        } 

        // this.handleUsernameChange = this.handleUsernameChange.bind(this);
        // this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.loginClicked = this.loginClicked.bind(this);

    }

    handleChange(event) {
        // console.log(event.target.name);
        console.log(this.state);
        this.setState(
            {
                [event.target.name]: event.target.value
            }
        );
    }

    // handleUsernameChange(event) {
    //     console.log(event.target.name);
    //     this.setState(
    //         {
    //             [event.target.name]: event.target.value
    //         }
    //     );
    // }

    // handlePasswordChange(event) {
    //     console.log(event.target.value);
    //     this.setState({password: event.target.value});
    // }

    loginClicked() {
        //in28minutes, dummy
        if(this.state.username === 'in28minutes' && this.state.password === 'dummy'){
            console.log('Successful');
            this.setState({showSuccessMessage: true})
            this.setState({hasLoginFailed: false})
        } else {
            console.log('Failed');
            this.setState({showSuccessMessage: false})
            this.setState({hasLoginFailed: true})
        }   
           

        //console.log(this.state);
    }

    render() {
        return (
            <div>
                <div> Invalid Credentials</div>
                <div> Login Successful</div>

                User Name: <input type="text" name="username" 
                    value={this.state.username} onChange={this.handleChange} />

                Password: <input type="password" name="password" 
                    value={this.state.password} onChange={this.handleChange}/>

                <button onClick={this.loginClicked} >Login</button>
            </div>
            
        )
    }
}

export default TodoApp;