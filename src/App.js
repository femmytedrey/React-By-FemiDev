import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';

class App extends Component{
  render() {
    return (
      <div className = "App">
        {/* <Greet name = "Femi" heroName = "Femi_Dev">
          <h3>This is a children props</h3>
        </Greet> */}
        {/* <Greet name = "Bruce" heroName = "Franklin">
          <button>Action</button>
        </Greet> */}
        {/* <Greet name = "John" heroName = "Superman"/> */}
        {/* <Welcome name = "Femi" heroName = "Franklin"></Welcome> */}
        {/* <Welcome name = "Bruce" heroName = "Femi_Dev"></Welcome> */}
        {/* <Welcome name = "John" heroName = "Superman"></Welcome> */}
        {/* <Hello /> */}
        <Message></Message>
      </div>
    );
  }
  
}

export default App;
