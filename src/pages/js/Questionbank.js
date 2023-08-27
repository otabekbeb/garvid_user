// import axios from "axios";
// import url from "./Host.js"
// // QuestionBank.js

// function aa() {
// 	axios.get(`${url}/edu/quations`).then(res=>{
// for (let i = 0; i < res.data.length; i++) {
// res.data[i].options=[res.data[i].variant1,res.data[i].variant2,res.data[i].variant3,res.data[i].variant4]
// res.data[i].id=i+1
// if(res.data[i].variant1===1){
// res.data[i].answer=res.data[i].variant1
// }
// if(res.data[i].variant2===2){
// 	res.data[i].answer=res.data[i].variant2

// }
// if(res.data[i].variant3===3){
// 	res.data[i].answer=res.data[i].variant3

// }
// if(res.data[i].variant4===4){
// 	res.data[i].answer=res.data[i].variant4
// }}
// var qBank=res.data

// }).catch(err=>{
// var qBank=[]
// })
// }
// console.log(qBank);
// // const qBank = [
	// {
	// 	id: 1,
	// 	question: "9*9",
	// 	options: ["64","87","82","81"],
	// 	answer: "81",
	// },
// // 	{
// // 		id: 2,
// // 		question: "7*4",
// // 		options: ["27","32","28","32"],
// // 		answer: "28",
// // 	},
// // 	{
// // 		id: 3,
// // 		question: "132+65",
// // 		options: ["225","197","167","184"],
// // 		answer: "197"
// // 	},
// // 	{
// // 		id: 4,
// // 		question: "875-561",
// // 		options: ["314","345","390","453"],
// // 		answer: "314"
// // 	},
// // 	{
// // 		id: 5,
// // 		question: "144/12",
// // 		options: ["12","11","14","20"],
// // 		answer: "12"
// // 	},
// // ]
// export default qBank;
