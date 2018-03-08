export const openPayment = (user) => ({
	type: 'OPEN_PAYMENT',
	isPaymentVisible: true,
	userReceivingPayment: user,
})

export const closePayment = () => ({
	type: 'CLOSE_PAYMENT',
	isPaymentVisible: false,
	userReceivingPayment: undefined,
})

export const navigate = (screenName) => ({
	type: 'NAVIGATE',
	screen: screenName,
})

export const navigateSelectAmount = () => navigate('select-amount')
export const navigateAddCard = () => navigate('add-card')
export const navigateSelectCard = () => navigate('select-card')
export const navigateShowReceipt = () => navigate('show-receipt')


export const setPaymentValue = (value) => ({
	type: 'SET_PAYMENT_VALUE',
	value:value
})