import React, { PureComponent } from 'react';
import '../stylesheets/UserListItem.css';

export default class UserListItem extends PureComponent {
	render() {
		return (
			<div className="UserListItem">
				{this.props.name}
			</div>
		)
	}
}