import React from 'react'
import '../stylesheets/PaymentTopBar.css'

//PaymentTopBar has a title and an X button when on Desktop, but is just the back button on Mobile
const PaymentTopBar = ({ name, onClose }) => {
	return (
		<div className="PaymentTopBar">
			{/* only one of the bars below will render, depending on the size of the screen*/}
			<MobileTopBar onClose={onClose} />
			<DesktopTopBar onClose={onClose} name={name} />
		</div>
	)
}

export default PaymentTopBar

const MobileTopBar = ({ onClose }) => {
	return <div className="PaymentTopBar-mobile" onClick={onClose}>
		<div className="PaymentTopBar-mobile-angle-brackets">
			❮
		</div>
		<div className="PaymentTopBar-mobile-back-text">
			Voltar
		</div>
	</div>
}

const DesktopTopBar = ({ name, onClose }) => {
	return <div className="PaymentTopBar-desktop">
		<div className="PaymentTopBar-desktop-title">
			Pagamento para <span className="PaymentTopBar-desktop-title-user-name">{name}</span>
		</div>

		<img
			className="PaymentTopBar-desktop-close"
			src="close-icon.svg"
			alt="X"
			onClick={onClose}
		/>
	</div>
}