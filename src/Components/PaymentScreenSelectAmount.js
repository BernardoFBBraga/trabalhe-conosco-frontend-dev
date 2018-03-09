import React, { Component } from 'react'
import { connect } from 'react-redux'
import UserInfo from './UserInfo'
import Button from './Button';
import CreditCardSelector from './CreditCardSelector';
import { navigateShowReceipt, navigateSelectCard, navigateAddCard, setPaymentValue } from '../actions'
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
		let { user, value, selectedCard, navigateShowReceipt, navigateSelectCard, navigateAddCard, } = this.props
		return (
			<div className="PaymentScreenSelectAmount">
				<UserInfo
					user={user}
				/>
				<div className="PaymentScreenSelectAmount-input">
					<IntlCurrencyInput
						defaultValue={value}
						currency="BRL"
						config={currencyConfig}
						onChange={this.handleChange}
						autoFocus={true}
						max={100000}
					/>
					<div className="horizontal-line-blue" />
				</div>
				<div className="horizontal-line-grey" />
				<div className="PaymentScreenSelectAmount-credit-card-selector">
					<CreditCardSelector
						selectedCard={selectedCard}
						navigateSelectCard={selectedCard ? navigateSelectCard : navigateAddCard}
					/>
				</div>
				<Button
					text="PAGAR"
					onClick={selectedCard ? navigateShowReceipt : navigateAddCard}
					fullWidth
				/>
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
	user: state.userReceivingPayment,
	selectedCard: state.selectedCard,
	value: state.value,
})

const mapDispatchToProps = (dispatch) => ({
	navigateShowReceipt: () => dispatch(navigateShowReceipt()),
	navigateSelectCard: () => dispatch(navigateSelectCard()),
	navigateAddCard: () => dispatch(navigateAddCard()),
	setPaymentValue: (value) => dispatch(setPaymentValue(value)),
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(PaymentScreenSelectAmount)
