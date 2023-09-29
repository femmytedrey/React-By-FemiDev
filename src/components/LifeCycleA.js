import React, { Component } from 'react'

class LifeCycleA extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
          name: 'Vishwas'
      }
      console.log('LifeCycleA constructor')
    }

    static getDerivedStateFromProps(props, state){
        console.log('LifecycleA getDerivedStateFromProps')
        return null
    }

    componentDidMount(){
        console.log('Lifecycle A componentDidMount')
    }

    shouldComponentUpdate(){
        console.log('LifecycleA shouldComponentUpdate')
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('LifecycleA getSnapshotBeforeUpdate')
        return null
    }

    componentDidUpdate(){
        console.log('LifecycleA componentDidUpdate')
    }

    changeState = () => {
        this.setState({
            name: 'Code Evolution'
        })
    } 

  render() {
    console.log('LifeCycle A render')
    return (
        <div>
            <div>LifeCycle A </div>
            <button onClick={this.changeState}>Change state</button>
            <div>LifeCycle B</div>
        </div>
        
    )
  }
}

export default LifeCycleA