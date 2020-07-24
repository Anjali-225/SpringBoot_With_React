//*** TodoApp.jsx ***\\

import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import AuthenticationService from'./AuthenticationService.js';
import AuthenticatedRoute from './AuthenticatedRoute.jsx';
import LoginComponent from './LoginComponent.jsx';
import ListTodosComponent from './ListTodosComponent.jsx';
import HeaderComponent from './HeaderComponent.jsx';
import FooterComponent from './FooterComponent.jsx';
import LogoutComponent from './LogoutComponent.jsx';
import WelcomeComponent from './WelcomeComponent.jsx';
import ErrorComponent from './ErrorComponent.jsx';
import TodoComponent from './TodoComponent.jsx';


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
                            <AuthenticatedRoute path="/todos/:id" exact component={TodoComponent} />
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

export default TodoApp;