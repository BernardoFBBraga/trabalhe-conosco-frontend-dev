import React from 'react'
import { connect } from 'react-redux'
import PaymentScreenSelectAmount from './PaymentScreenSelectAmount'
import PaymentScreenAddCard from './PaymentScreenAddCard'
import PaymentScreenSelectCard from './PaymentScreenSelectCard'
import PaymentScreenShowReceipt from './PaymentScreenShowReceipt'
import '../stylesheets/PaymentScreenContent.css'

const PaymentScreenContent = ({ screen }) => {
	let screenComponent = null;
	switch (screen) {
		case 'select-amount':
			screenComponent = <PaymentScreenSelectAmount />
			break
		case 'add-card':
			screenComponent = <PaymentScreenAddCard />
			break
		case 'select-card':
			screenComponent = <PaymentScreenSelectCard />
			break
		case 'show-receipt':
			screenComponent = <PaymentScreenShowReceipt />
			break
		default:
			throw (new Error("Erro ao selecionar tela"))
	}

	return (
		<div className="PaymentScreenContent">
			{screenComponent}
		</div>
	)
}


const mapStateToProps = (state) => ({
	screen: state.screen,
})

export default connect(
	mapStateToProps,
	null
)(PaymentScreenContent)