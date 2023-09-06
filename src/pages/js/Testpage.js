// App.js

import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Question from "../js/Question";
// import qBank from "../js/Questionbank";
import Score from "../js/Score";
import axios from "axios";
import url from "./Host";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			questionBank: [	{
				id: 1,
				question: "9*9",
				options: ["64","87","82","81"],
				answer: "81"
			}],
			currentQuestion: 0,
			selectedOption: "",
			score: 0,
			quizEnd: false,
		};
	}
	componentDidMount(){
		axios.get(`${url}/edu/quations`).then(res=>{
			
			for (let i = 0; i < res.data.length; i++) {
			res.data[i].options=[res.data[i].variant1,res.data[i].variant2,res.data[i].variant3,res.data[i].variant4]
			res.data[i].id=i+1
			if(res.data[i].answer==1){
			res.data[i].answer=res.data[i].variant1
			}
			if(res.data[i].answer==2){
				res.data[i].answer=res.data[i].variant2
			
			}
			if(res.data[i].answer==3){
				res.data[i].answer=res.data[i].variant3
			
			}
			if(res.data[i].answer==4){
				res.data[i].answer=res.data[i].variant4
			}}
			
			this.setState({questionBank:res.data})
			console.log(res.data);
			}).catch(err=>{
			
			})
	}

	handleOptionChange = (e) => {
		this.setState({ selectedOption: e.target.value });
	};

	handleFormSubmit = (e) => {
		e.preventDefault();
		this.checkAnswer();
		this.handleNextQuestion();
	};

	checkAnswer = () => {
		const { questionBank, currentQuestion, selectedOption, score } = this.state;
		if (selectedOption === questionBank[currentQuestion].answer) {
			this.setState((prevState) => ({ score: prevState.score + 1 }));
		}
	};

	handleNextQuestion = () => {
		const { questionBank, currentQuestion } = this.state;
		if (currentQuestion + 1 < questionBank.length) {
			this.setState((prevState) => ({
				currentQuestion: prevState.currentQuestion + 1,
				selectedOption: "",
			}));
		} else {
			this.setState({
				quizEnd: true,
			});
		}
	};
	bir = ()=>{
		document.querySelector(".for_bigs").style="display:flex"
		document.querySelector(".bir_uchun").style="display:none"
	}

	render() {
		const { questionBank, currentQuestion, selectedOption, score, quizEnd } =
			this.state;
		return (
<div>

			<div className="bir_uchun"><div  className="bir_u">
				<img src="https://cdn.goconqr.com/assets/quiz/splash_clock-734cd8dde9a207e2c74c07bc3c40edd41e7a3891c095949da9ff3e266e7e6483.png" alt="" />
				<h1>Each question in this quiz is timed.</h1>

<button onClick={()=>this.bir()}>Begin Quiz</button>
			</div></div>
            <div style={{display:"none"}} className="for_bigs">
			<div className="App d-flex flex-column align-items-center justify-content-center">
				{!quizEnd ? (
					<Question
						question={questionBank[currentQuestion]}
						selectedOption={selectedOption}
						onOptionChange={this.handleOptionChange}
						onSubmit={this.handleFormSubmit}
					/>
				) : (
					<Score
						score={score}
						onNextQuestion={this.handleNextQuestion}
						className="score"
					/>
				)}
			</div></div>
			</div>
		);
	}
}

export default App;
