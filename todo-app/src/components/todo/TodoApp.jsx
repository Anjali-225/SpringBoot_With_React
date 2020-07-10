import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import AuthenticationService from'./AuthenticationService.js';
import AuthenticatedRoute from './AuthenticatedRoute.jsx';
import LoginComponent from './LoginComponent';

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
                            <AuthenticatedRoute path="/welcome/:name" exact component={WelcomeComponent} />
                            <AuthenticatedRoute path="/todos" exact component={ListTodosComponent} />
                            <AuthenticatedRoute path="/logout" exact component={LogoutComponent} />
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

        const isUserLoggedIn = AuthenticationService.isUserLoggedIn();
        // console.log(isUserLoggedIn);

        return (
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div>
                        <a href="http://www.in28minutes.com" className="navbar-brand">in28minutes</a>
                    </div>

                    <ul className="navbar-nav" >
                        {isUserLoggedIn && <li> <Link className="nav-link" to="/welcome">Home</Link> </li>}
                        {isUserLoggedIn && <li> <Link className="nav-link" to="/todos">Todos</Link> </li>}
                    </ul>

                    <ul className="navbar-nav navbar-collapse justify-content-end">
                        {!isUserLoggedIn && <li> <Link className="nav-link" to="/login">Login</Link> </li>}
                        {isUserLoggedIn && <li> <Link className="nav-link" to="/logout" onClick={AuthenticationService.logout}>Logout</Link> </li>}
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
                                <th>Description</th>                            
                                <th>Is Completed?</th>
                                <th>Target Date</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                this.state.todos.map (
                                    todo =>  <tr key={todo.id}>
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