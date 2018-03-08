const defaultState = {
	screen: 'select-amount', //possible states: 'select-amount', 'add-card', 'select-card', 'show-receipt'
	isPaymentVisible: false,
	userReceivingPayment: undefined,
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
			}
		case 'NAVIGATE':
			return {
				...state,
				screen: action.screen
			}
		default:
			return state
	}
}

export default payment