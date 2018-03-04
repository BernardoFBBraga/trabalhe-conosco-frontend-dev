import React, { Component } from 'react'
import Header from './Header'
import UserListContainer from './UserListContainer'
import 'normalize.css'
import '../stylesheets/App.css'
import Payment from './Payment'

class App extends Component {
	render() {
		return (
			<div className="App">
				<Header
					headerText="Front-End Test"
				/>
				<div className="App-content">
					<UserListContainer />
					<Payment />
				</div>
			</div>
		)
	}
}

export default App
