import React, { Component } from 'react'
import { connect } from 'react-redux'
import UserInfo from './UserInfo'
import Button from './Button';
import { navigateShowReceipt } from '../actions'
import '../stylesheets/PaymentScreenSelectAmount.css'

class PaymentScreenSelectAmount extends Component {
	render() {
		let { user, navigate } = this.props
		return (
			<div className="PaymentScreenSelectAmount">
				<UserInfo
					user={user}
				/>
				<Button
					text="PAGAR"
					onClick={navigate}
					fullWidth
				/>
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
	user: state.userReceivingPayment,
})

const mapDispatchToProps = (dispatch) => ({
	navigate: () => dispatch(navigateShowReceipt())
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(PaymentScreenSelectAmount)
