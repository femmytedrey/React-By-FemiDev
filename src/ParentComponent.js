import React, { Component } from 'react'
import ChildComponent from './components/ChildComponent'

class ParentComponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        parentName: 'Mr Adeyemo'
      }

      this.greetParent = this.greetParent.bind(this)
    }

    greetParent(childName){
        alert(`Hello ${this.state.parentName}, this message came from your son ${childName}. Kindly click 'ok' to open the message`)
    }

  render() {
    return (
      <ChildComponent greetHandler = {this.greetParent}/>
    )
  }
}

export default ParentComponent