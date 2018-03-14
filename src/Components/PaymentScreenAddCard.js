import React, { Component } from 'react'
import '../stylesheets/PaymentScreenAddCard.css'
import Input from './Input'
import Button from './Button';


export default class PaymentScreenAddCard extends Component {

	render() {

		return (
			<div className="PaymentScreenAddCard">
				<form>
					<Input
						label="Nome escrito no cartão"
						autoFocus
					/>
					<Input
						label="Número do Cartão"
					/>
					<Input
						label="Validade (mm/aaaa)"
					/>
					<Input
						label="Código de segurança"
					/>
					<Input
						label="CEP do endereço da fatura"
					/>
					<Button
						text="CADASTRAR"
						//	{/*onClick={selectedCard ? navigateShowReceipt : navigateAddCard}*/}
						fullWidth
					/>
				</form>

			</div>)
	}
}