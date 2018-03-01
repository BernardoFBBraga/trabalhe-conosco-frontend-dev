import React, { Component } from 'react';
import Header from './Header'
import UserListContainer from './UserListContainer'
import '../stylesheets/App.css';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Header
					headerText="Front-End Test"
				/>
				<div className="App-content">
					<UserListContainer />
				</div>
			</div>
		);
	}
}

export default App;
