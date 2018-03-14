import React from 'react'
import '../stylesheets/Input.css'

export default ({ label, autoFocus }) => {
	return (
		<div className="Input">
			<input type="text" autoFocus={autoFocus} required />
			<span className="Input-underlying-bar"></span>
			<label>{label}</label>
		</div>
	)
}