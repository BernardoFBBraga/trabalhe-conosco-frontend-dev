import React, { PureComponent } from 'react'
import '../stylesheets/PayButton.css'

export default class PayButton extends PureComponent {
	render() {
		return (
			<div className="PayButton">
				<div className="PayButton-dollar-pagar">
					<div className="PayButton-dollar-icon">
						$
					</div>
				</div>
				<div className="PayButton-angle-brackets">
					❯
				</div>
			</div>
		)
	}
}