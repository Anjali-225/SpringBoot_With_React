//*** App.js ***\\

import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import './bootstrap.css';

// import FirstComponent from './components/learning-examples/FirstComponent';
// import SecondComponent from './components/learning-examples/SecondComponent';
// import ThirdComponent from './components/learning-examples/ThirdComponent';
// import FourthComponent from './components/learning-examples/FourthComponent';

// import CounterButton from './components/counter/Counter.jsx';
// import Counter from './components/counter/Counter.jsx';
import TodoApp from './components/todo/TodoApp.jsx';


//The parenthesis by the return is very important
class App extends Component {
  render() {
    return (
      <div className="App">
        {/*<Counter />*/}
        <TodoApp />
      </div>
    );
  }
}


// class LearningComponents extends Component {
//   render() {
//     return (
//       <div className="LearningComponents">
//         My Hello World
//         <FirstComponent />
//         <SecondComponent />
//         <ThirdComponent />
//         <FourthComponent />
//       </div>
//     );
//   }  
// }

export default App;
