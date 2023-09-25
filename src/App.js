import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './ParentComponent';
import UserGreeting from './components/UserGreeting';

class App extends Component{
  render() {
    return (
      <div className = "App">
        <UserGreeting />
        {/* <ParentComponent /> */}
        {/* <EventBind /> */}
        {/* <FunctionClick /> */}
        {/* <ClassClick /> */}
        {/* <Counter /> */}
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
        {/* <Message></Message> */}
      </div>
    );
  }
  
}

export default App;
