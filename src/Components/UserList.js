import React from 'react';
import UserListItem from './UserListItem'
import '../stylesheets/UserList.css';

export default ({ users = [] }) => {
	return (
		<div className="UserList">
			{
				users.map(user =>
					<UserListItem
						key={user.id}
						name={user.name}
					/>
				)
			}
		</div>
	)
}