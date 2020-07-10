import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import AuthenticationService from'./AuthenticationService.js';

class TodoApp extends Component {
    render() {
        return (
            <div className="TodoApp">
                <Router>
                    <>
                        <HeaderComponent/>
                        
                        <Switch>
                            <Route path="/" exact component={LoginComponent} />
                            <Route path="/login" exact component={LoginComponent} />
                            <Route path="/welcome/:name" exact component={WelcomeComponent} />
                            <Route path="/todos" exact component={ListTodosComponent} />
                            <Route path="/logout" exact component={LogoutComponent} />
                            <Route path="" component={ErrorComponent} />
                        </Switch>

                        <FooterComponent/>
                        

                    </>                       
                </Router>

                {/*<LoginComponent/>
                <WelcomeComponent/>*/} 
                
            </div>
        )
    }
}

class HeaderComponent extends Component {
    render() {
        return (
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div>
                        <a href="http://www.in28minutes.com" className="navbar-brand">in28minutes</a>
                    </div>

                    <ul className="navbar-nav" >
                        <li> <Link className="nav-link" to="/welcome">Home</Link> </li>
                        <li> <Link className="nav-link" to="/todos">Todos</Link> </li>
                    </ul>

                    <ul className="navbar-nav navbar-collapse justify-content-end">
                        <li> <Link className="nav-link" to="/login">Login</Link> </li>
                        <li> <Link className="nav-link" to="/logout" onClick={AuthenticationService.logout}>Logout</Link> </li>
                    </ul>

                </nav>
            </header>
            

        )
    }
}

class FooterComponent extends Component {
    render() {
        return (
            <footer className="footer">
                <span className="text-muted"> All Rights Reserved 2020 @Anjali </span>                
            </footer>

        )
    }
}

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

class ListTodosComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            todos : 
                [
                    {id: 1, description: 'Learn React', done: false, targetDate: new Date() },
                    {id: 2, description: 'Learn Dance', done: false, targetDate: new Date() },
                    {id: 3, description: 'Learn New Language', done: false, targetDate: new Date() }
                ]
        }
    }

    render() {
        return(
            <div>    
                <h1>List Todos</h1>  
                
                <div className="container" >
                    <table className="table">
                        <thead>
                            <tr>
                                <th>id</th>
                                <th>description</th>                            
                                <th>Is Completed?</th>
                                <th>Target Date</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                this.state.todos.map (
                                    todo =>  <tr>
                                                <td>{todo.id}</td>
                                                <td>{todo.description}</td> 
                                                <td>{todo.done.toString()}</td>
                                                <td>{todo.targetDate.toString()}</td> 
                                            </tr>
                                )
                            }

                        
                        </tbody>
                    </table>
                
                </div>
                
               
            </div>
        )
    }
}

class WelcomeComponent extends Component {
    render() {
        return(
            <div>   
                <h1>Welcome!</h1> 
                <div className="container">
                    Welcome {this.props.match.params.name}. You can manage your todos <Link to="/todos">here</Link>.
                </div>
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
            // console.log('Successful');
            AuthenticationService.registerSuccessfulLogin(this.state.username, this.state.password )
            this.props.history.push(`/welcome/${this.state.username}`)
            // this.setState({showSuccessMessage: true})
            // this.setState({hasLoginFailed: false})
        } else {
            // console.log('Failed');
            this.setState({showSuccessMessage: false})
            this.setState({hasLoginFailed: true})
        }   
           

        //console.log(this.state);
    }

    render() {
        return (
            <div>
                <h1>Login</h1>

                <div className="container">
                    {/*<ShowInvalidCredentials hasLoginFailed={this.state.hasLoginFailed} />*/}
                    {this.state.hasLoginFailed && <div className="alert alert-warning"> Invalid Credentials</div>}
                    {/*<ShowLoginSuccessMessage showSuccessMessage={this.state.showSuccessMessage} />*/}
                    {this.state.ShowLoginSuccessMessage && <div> Login Successful</div>}

                    User Name: <input type="text" name="username" 
                        value={this.state.username} onChange={this.handleChange} />

                    Password: <input type="password" name="password" 
                        value={this.state.password} onChange={this.handleChange}/>

                    <button className="btn btn-success" onClick={this.loginClicked} >Login</button>
                </div>
                
            </div>
            
        )
    }
}

function ErrorComponent() {
    return (
        <div>
            An error occured. I don't know what to do! Contact support at abcd-efgh-ijkl
        </div>
    )
}

// function ShowInvalidCredentials(props) {
//     if(props.hasLoginFailed) {
//         return <div> Invalid Credentials</div>
//     }
//     return null
// }

// function ShowLoginSuccessMessage(props) {
//     if(props.showSuccessMessage) {
//         return <div> Login Successful</div>
//     }
//     return null
// }

export default TodoApp;