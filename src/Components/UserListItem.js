import React, { PureComponent } from 'react'
import PayButton from './PayButton'
import UserInfo from './UserInfo'
import '../stylesheets/UserListItem.css'

export default class UserListItem extends PureComponent {
	render() {
		return (
			<React.Fragment>
				<div className="UserListItem">
					<UserInfo
						user={this.props.user}
					/>
					<PayButton
						user={this.props.user}
					/>
				</div>
			</React.Fragment>
		)
	}
}