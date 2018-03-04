import React from 'react'
import { connect } from 'react-redux'
import { closePayment } from '../actions'
import PaymentTopBar from './PaymentTopBar'
import UserInfo from './UserInfo'
import '../stylesheets/Payment.css'

const Payment = ({ active, user, onClose }) => {
	if (!active) {
		return null
	} else {
		return (
			<React.Fragment>
				<div className="Payment-desktop-background"
					onClick={onClose}
				/>
				<div className="Payment">
					<PaymentTopBar onClose={onClose} name={user.name} />
					<div className="Payment-body">
						<UserInfo
							user={user}
						/>
					</div>
				</div>
			</React.Fragment>
		)
	}
}


const mapStateToProps = (state) => ({
	active: state.isPaymentVisible,
	user: state.userReceivingPayment,
})

const mapDispatchToProps = (dispatch) => ({
	onClose: () => dispatch(closePayment())
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Payment)