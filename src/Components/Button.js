import React from 'react'
import '../stylesheets/Button.css'

export default ({ onClick, text, className = "", fullWidth }) => {
	let fullWidthClass = fullWidth ? "Button-full-width" : ""
	return (
		<div
			className={"Button ripple " + className + fullWidthClass}
			onClick={onClick}
		>
			<span className="Button-text">
				{text}
			</span>
		</div>
	)
}