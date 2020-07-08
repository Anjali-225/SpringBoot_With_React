import React, { Component } from 'react';
import './Counter.css';
import { render } from '@testing-library/react';
import PropsTypes from 'prop-types'

class Counter extends Component {
    constructor() {
        super();//Error 1
        this.state = {
            counter : 0,
        }
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
        this.reset = this.reset.bind(this);
    }

    render() {
        return (
          <div className="counter">
            <CounterButton by={1} incrementMethod={this.increment} decrementMethod={this.decrement} />    
            <CounterButton by={5} incrementMethod={this.increment} decrementMethod={this.decrement} />
            <CounterButton by={10} incrementMethod={this.increment} decrementMethod={this.decrement} />   
            <span className="count" > {this.state.counter} </span> 
            <div> <button className="reset" onClick={this.reset} >Reset</button> </div>
          </div>
        );
      }

    reset() {
        this.setState( {counter: 0} ) ;
    }

     
    increment(by){
        //console.log(`increment from child - ${by}`);
        this.setState(
            (prevState) => {
            return {counter: prevState.counter + by}
            }
        );
    }

    decrement(by){
        //console.log(`increment from child - ${by}`);
        this.setState(
            (prevState) => {
            return {counter: prevState.counter - by}
            }
        );
    }

}

class CounterButton extends Component {

    //Define the initial state in a constructor
    //state => counter 0
    constructor() {
        super() //Error 1
        this.state = {
            counter : 0,
        }

        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }



    //render = () => {
    render() {
        return (
            <div className="counter">
                <button onClick={this.increment}>+{this.props.by}</button>

                <button onClick={this.decrement}>-{this.props.by}</button>

                {/*<span className="count" > {this.state.counter} </span>*/}

            </div>
        );
    }

    
    //increment = () => { //Update state - counter++
    increment(){
        //console.log('increment');
        // this.state.counter++  //this is very bad practice 
        this.setState(
            (prevState) => {
                return {counter: prevState.counter + this.props.by}    
            }
        );

        this.props.incrementMethod(this.props.by);
    }

    
    decrement () {        
        this.setState(
            (prevState) => {
                return {counter: prevState.counter - this.props.by}    
            }
        );

        this.props.decrementMethod(this.props.by);
    }
    
}

CounterButton.defaultProps = {
    by : 1 
}

CounterButton.PropsTypes = {
    by  : PropsTypes.number
}



export default Counter;