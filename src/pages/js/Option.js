// Option.js

import React, { Component } from 'react';

class Options extends Component {
	render() {
		const { options, selectedOption, onOptionChange } = this.props;

		return (
			<div className='options'>
				{options.map((option, index) => (
					<div style={selectedOption===option?{background:"#6b3d0c",border: "1px solid #6b3d0c",color:"white",transition:"0.5s"}:{background:"white",color:"black",transition:"0.5s"}} key={index} className="form-check">
						<input
							type="radio"
							name="option"
							value={option}
							checked={selectedOption === option}
							onChange={onOptionChange}
							className="form-check-input"
						/>
						<label className="form-check-label">{option}</label>
					</div>
				))}
			</div>
		);
	}
}

export default Options;
