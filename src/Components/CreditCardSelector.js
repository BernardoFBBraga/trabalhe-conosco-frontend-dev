import React from 'react'
import '../stylesheets/CreditCardSelector.css'

export default ({ selectedCard, navigateSelectCard }) => {
	let colorClass, src, alt, mainMessage, details
	if (!selectedCard) {
		colorClass = "CreditCardSelector-red"
		src = "alert.svg"
		alt = "⚠"
		mainMessage = "Nenhum cartão de crédito cadastrado."
		details = "Cadastrar agora."
	} else {
		colorClass = "CreditCardSelector-blue"
		src = "credit-card.svg"
		alt = "💳"
		mainMessage = "Forma de pagamento:"
		let card_number = selectedCard.card_number
		details = "Cartão de Crédito com final " + card_number.slice(card_number.length - 4, card_number.length)
	}
	return (
		<div
			className={"CreditCardSelector " + colorClass}
			onClick={navigateSelectCard}
		>
			<img
				className="CreditCardSelector-icon"
				src={src}
				alt={alt}
			/>
			<div>
				<div> {mainMessage} </div>
				<div className="CreditCardSelector-highlight"> {details} </div>
			</div>
		</div>
	)
}