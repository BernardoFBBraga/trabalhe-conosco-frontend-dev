import React, { Component, PureComponent } from 'react'
import { connect } from 'react-redux'
import { openPayment } from '../actions'
import '../stylesheets/PayButton.css'

class PayButton extends PureComponent {
	onClick = () => this.props.onClick(this.props.user)

	render() {
		return (
			<div className="PayButton"
				onClick={this.onClick}
			>
				<div className="PayButton-dollar-pagar">
					<div className="PayButton-dollar-icon">
						$
					</div>
				</div>
				<div className="PayButton-angle-brackets">
					❯
				</div>
			</div>
		)
	}
}

class PayButtonContainer extends Component {
	dispatchOpenPayment = () => this.props.dispatch(openPayment(this.props.user))

	render() {
		return (
			<PayButton
				onClick={this.dispatchOpenPayment}
			/>
		)
	}
}

export default connect()(PayButtonContainer)