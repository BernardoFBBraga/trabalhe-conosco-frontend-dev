import React from 'react'
import { connect } from 'react-redux'
import { closePayment } from '../actions'
import PaymentTopBar from './PaymentTopBar'
import PaymentScreenContent from './PaymentScreenContent'
import '../stylesheets/Payment.css'

const Payment = ({ active, user, onClose, screen }) => {
	if (!active) {
		return null
	} else {
		return (
			<React.Fragment>
				<div className="Payment-desktop-background" //this div will not display on mobile
					onClick={onClose}
				/>
				<div className="Payment">
					<PaymentTopBar
						onClose={onClose}
						currentScreen={screen}
						name={user.name}
						screen={screen}
					/>
					<PaymentScreenContent />
				</div>
			</React.Fragment>
		)
	}
}


const mapStateToProps = (state) => ({
	active: state.isPaymentVisible,
	user: state.userReceivingPayment,
	screen: state.screen,
})

const mapDispatchToProps = (dispatch) => ({
	onClose: () => dispatch(closePayment())
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Payment)