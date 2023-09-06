// Question.js

import React, {Component} from "react";
import Options from "./Option";
import axios from "axios";
import url from "./Host";

class Question extends Component{
	state={
		data:[]
	}
	componentDidMount(){
		axios.get(`${url}/api/nomycourse/${localStorage.getItem("OneuserId")}`, { headers: { Authorization: "Bearer " + localStorage.getItem("token") } }).then(res => {
			this.setState({data:res.data})
		}).catch(err=>{})
	}
	render() {
		const {question, selectedOption, onOptionChange, onSubmit} = this.props;

		return(
			<div className="lend">
				<h3 style={{display:"flex",justifyContent:"center",marginBottom:"30px",gap:"10px"}}>Question {question.id} of {this.state.data.length}</h3>
				<h5 id="mt-21" className="mt-2">{question.question}</h5>
				<form onSubmit={onSubmit} className="mt-2 mb-2">
					<Options type="submit"
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
