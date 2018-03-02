import React, { PureComponent } from 'react';
import '../stylesheets/UserListItem.css';

export default class UserListItem extends PureComponent {
	render() {
		return (
			<React.Fragment>
				<div className="UserListItem">
					<UserAvatar
						img={this.props.img}
					/>
					<UserInfo
						username={this.props.username}
						id={this.props.id}
						name={this.props.name}
					/>
				</div>
			</React.Fragment>
		)
	}
}

const UserAvatar = ({ img }) => <img className="UserListItem-avatar" src={img} alt="" />


const UserInfo = ({ username, id, name }) =>
	<div className="UserListItem-user-info">
		<h1 className="UserListItem-title">
			{name}
		</h1>
		<h2 className="UserListItem-sub-title">
			<span>
				{`id: ${id}`}
			</span>
			<span>
				{username}
			</span>
		</h2>
	</div>