const payment = (state = [], action) => {
	switch (action.type) {
		case 'OPEN_PAYMENT':
		case 'CLOSE_PAYMENT':
			return {
				...state,
				isPaymentVisible: action.isPaymentVisible,
				userReceivingPayment: action.userReceivingPayment,
			}
		default:
			return state
	}
}

export default payment