import React, { Component } from 'react'
import { connect } from 'react-redux'
import UserInfo from './UserInfo'
import Button from './Button';
import { navigateShowReceipt, setPaymentValue } from '../actions'
import '../stylesheets/PaymentScreenSelectAmount.css'
import IntlCurrencyInput from "react-intl-currency-input"

const currencyConfig = {
	locale: "pt-BR",
	formats: {
		number: {
			BRL: {
				style: "currency",
				currency: "BRL",
				minimumFractionDigits: 2,
				maximumFractionDigits: 2,
			},
		},
	},
};

class PaymentScreenSelectAmount extends Component {
	handleChange = (event, value, maskedValue) => {
		this.props.setPaymentValue(value)
	}

	render() {
		let { user, navigate, value } = this.props
		console.log(value)
		return (
			<div className="PaymentScreenSelectAmount">
				<UserInfo
					user={user}
				/>
				<div>
					<IntlCurrencyInput
						defaultValue={value}
						currency="BRL"
						config={currencyConfig}
						onChange={this.handleChange}
						max={100000}
					/>
					<div className="horizontal-line" />
				</div>
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
	value: state.value,
})

const mapDispatchToProps = (dispatch) => ({
	navigate: () => dispatch(navigateShowReceipt()),
	setPaymentValue: (value) => dispatch(setPaymentValue(value)),
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(PaymentScreenSelectAmount)
