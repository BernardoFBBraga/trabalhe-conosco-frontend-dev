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