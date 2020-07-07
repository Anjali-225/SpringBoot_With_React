import React, { Component } from 'react';
import './Counter.css';
import { render } from '@testing-library/react';

class Counter extends Component {

    //Define the initial state in a constructor
    //state => counter 0
    constructor() {
        super() //Error 1
        this.state = {
            counter : 0,
        }

        this.increment = this.increment.bind(this);
    }



    //render = () => {
    render() {
        return (
            <div className="counter">
                <button onClick={this.increment}>+{this.props.by}</button>
                <span className="count" > {this.state.counter} </span>
            </div>
        );
    }

    
    //increment = () => { //Update state - counter++
    increment(){
        //console.log('increment');
        // this.state.counter++  //this is very bad practice 
        this.setState({
            counter: this.state.counter + this.props.by

        })
    }
    
}



export default Counter;