import React, { Component } from 'react'
import UserList from './UserList'

export default class UserListContainer extends Component {
	constructor(props) {
		super(props)
		this.state = {
			users: [],
			status: "fetching"
		}
		this.fetchUsers()
	}
	fetchUsers = () => {
		fetch('http://careers.picpay.com/tests/mobdev/users')
			.then((response) => {
				return response.json()
			})
			.then((json) => {
				this.setState({
					users: json,
					status: "done"
				})
				return json
			})
			.catch(error => {
				console.log(error)
				this.setState({
					status: "error"
				})
			})
	}
	render() {
		return (
			<UserList
				users={this.state.users}
			/>
		)
	}
}