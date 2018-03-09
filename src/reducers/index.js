const defaultState = {
	screen: 'select-amount', //possible states: 'select-amount', 'add-card', 'select-card', 'show-receipt'
	isPaymentVisible: false,
	userReceivingPayment: undefined,
	value: 0,
}
const payment = (state = defaultState, action) => {
	switch (action.type) {
		case 'OPEN_PAYMENT':
		case 'CLOSE_PAYMENT':
			return {
				...state,
				isPaymentVisible: action.isPaymentVisible,
				userReceivingPayment: action.userReceivingPayment,
				screen: 'select-amount',
				value: 0,
			}
		case 'NAVIGATE':
			return {
				...state,
				screen: action.screen
			}
		case 'SET_PAYMENT_VALUE':
			return {
				...state,
				value: action.value
			}
		default:
			return state
	}
}

export default payment