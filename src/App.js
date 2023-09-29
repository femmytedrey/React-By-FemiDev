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
import NameList from './components/NameList';
import StyleSheet from './components/StyleSheet';
// import Inline from './components/Inline';
import './appStyles.css'
import styles from './appStyles.module.css'
import Form from './components/Form';
import LifeCycleA from './components/LifeCycleA';
import FragmentDemo from './components/FragmentDemo';
import Table from './components/Table';
import PureComp from './components/PureComp';
import ParentComp from './components/ParentComp';
import RefsDemo from './components/RefsDemo';
import FocusInput from './components/FocusInput';

class App extends Component{
  render() {
    return (
      <div className = "App">
        <FocusInput />
        {/* <RefsDemo /> */}
        {/* <ParentComp />   */}
        {/* <PureComp /> */}
        {/* <Table /> */}
        {/* <FragmentDemo /> */}
        {/* <LifeCycleA />  */}
        {/* <Form /> */}
        {/* <h1 className = 'error'>Error</h1>
        <h1 className = {styles.success}>Success</h1> */}
        {/* <StyleSheet primary = {true}></StyleSheet> */}
        {/* <Inline /> */}
        {/* <NameList /> */}
        {/* <UserGreeting /> */}
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
