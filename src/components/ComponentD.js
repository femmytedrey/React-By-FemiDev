import React, { Component } from 'react'
import ComponentE from './ComponentE'
import UserContext from './userContext'

class ComponentD extends Component {
    static contextType  = UserContext
  render() {
    return (
      <div>
        Component D context {this.context} <ComponentE />
      </div>
    )
  }
}


export default ComponentD