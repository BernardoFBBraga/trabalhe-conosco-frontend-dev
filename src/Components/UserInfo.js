import React, { PureComponent } from 'react'
import '../stylesheets/UserInfo.css'

export default class UserInfo extends PureComponent {
	render() {
		return (
			<div className="UserInfo">
				<UserAvatar
					img={this.props.user.img}
				/>
				<UserTextInfo
					username={this.props.user.username}
					id={this.props.user.id}
					name={this.props.user.name}
				/>
			</div>
		)
	}
}

const UserAvatar = ({ img }) => <img className="UserInfo-avatar" src={img} alt="" />


const UserTextInfo = ({ username, id, name }) =>
	<div className="UserInfo-text">
		<h1 className="UserInfo-title">
			{name}
		</h1>
		<h2 className="UserInfo-sub-title">
			<span>
				{`id: ${id}`}
			</span>
			<span>
				{username}
			</span>
		</h2>
	</div>