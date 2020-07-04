import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       My Hello World!
//     </div>
//   );
// }

class App extends Component {
  render() {
    return (
      <div className="App">
        My Hello World
        <FirstComponent />
        <SecondComponent />
        <ThirdComponent />
        <FourthComponent />
      </div>
    );
  }
}

//Class Component
class FirstComponent extends Component {
  render() {
    return (
      <div className="firstComponent">
        FirstComponent
      </div>
    );
  }
}

class SecondComponent extends Component {
  render() {
    return (
      <div className="secondComponent">
        SecondComponent
      </div>
    );
  }
}


//Function Component
function ThirdComponent(){
  return (
    <div className="thirdComponent">
      ThirdComponent
    </div>
  );
}

function FourthComponent(){
  return (
    <div className="fourthComponent">
      FourthComponent
    </div>
  );
}



export default App;
