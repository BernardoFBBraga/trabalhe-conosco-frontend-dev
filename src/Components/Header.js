import React from 'react';
import '../stylesheets/Header.css';

export default ({ headerText }) => {
	return (
		<header className="App-header">
			<div className="App-header-text-boundary">
				<img
					style={{ width: 24, heigh: 24 }}
					src="transparent-icon.png"
					alt=""
				/>
				<VerticalLine />
				<div className="App-title">
					{headerText}
				</div>
			</div>
		</header>
	)
}

const VerticalLine = () => {
	return (
		<div className="vertical-line-outer">
			<div className="vertical-line-inner" />
		</div>
	)
}