// Question.js

import React, {Component} from "react";
import Options from "./Option";

class Question extends Component{
	render() {
		const {question, selectedOption, onOptionChange, onSubmit} = this.props;

		return(
			<div className="lend">
				<h3 style={{display:"flex",justifyContent:"center"}}>Question {question.id} of {localStorage.getItem("for_tests")}</h3>
				<h5 id="mt-21" className="mt-2">{question.question}</h5>
				<form onSubmit={onSubmit} className="mt-2 mb-2">
					<Options
						options={question.options}
						selectedOption={selectedOption}
						onOptionChange={onOptionChange}
					/>
					<div className="butt111">
					<button style={{background:"#44bef1",border:"none"}} type="submit" className="btn btn-primary mt-2">
						Next
					</button></div>
				</form>
				
			</div>
		)
	}
}

export default Question;
