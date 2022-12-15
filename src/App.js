import React, { Component }from 'react'
import CardList from './CardList'
import SearchBar from './SearchBar'

import './app.css';

class App extends Component {
    constructor () {
    super()
      this.state = {
        robots: [],
        searchfield : ""

      }
    }
    onsearchChange =(event) => {
      this.setState ({
        searchfield: event.target.value
      })
    }
    componentDidMount () {
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(respnse => respnse.json())
      .then(users => this.setState({robots:users}))
    }
    render () {
      const filteredRobot = this.state.robots.filter(robot => {
      return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
      })
      if(this.state.robots.length === 0) {
          return (
            <div>
              <div class="windows8">
	<div class="wBall" id="wBall_1">
		<div class="wInnerBall"></div>
	</div>
	<div class="wBall" id="wBall_2">
		<div class="wInnerBall"></div>
	</div>
	<div class="wBall" id="wBall_3">
		<div class="wInnerBall"></div>
	</div>
	<div class="wBall" id="wBall_4">
		<div class="wInnerBall"></div>
	</div>
	<div class="wBall" id="wBall_5">
		<div class="wInnerBall"></div>
	</div>
</div>
            </div>
          )
      }
      else {
        return (
          <div className='tc'>
            <h1 className='f2'>RoboFriends</h1>
            <SearchBar searchChange = {this.onsearchChange} />
            <CardList  robots= {filteredRobot}/>
          </div>
      )
      }
      
    }
}
    
export default App;