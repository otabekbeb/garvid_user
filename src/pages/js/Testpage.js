import React,{useState,useEffect} from 'react'
import '../css/Testpage.css'
function openTest(){
    document.querySelector(".block-bir-variant1 p").style=`   background-color: #fcfcfc;
    border: 1px solid #ccc;`
    document.querySelector(".block-bir-variant2 p").style=`
background-color: #fcfcfc;
border: 1px solid #ccc;

`
document.querySelector(".block-bir-variant2 p").style=`
background-color: #fcfcfc;
border: 1px solid #ccc;

`
    document.querySelector(".block-bir-variant p").style=` background-color: rgb(98, 177, 204);color: white;`
}
function openTest1(){
    document.querySelector(".block-bir-variant2 p").style=`   background-color: #fcfcfc;
    border: 1px solid #ccc;`
    document.querySelector(".block-bir-variant p").style=`   background-color: #fcfcfc;
    border: 1px solid #ccc;`
    document.querySelector(".block-bir-variant1 p").style=`background-color: rgb(98, 177, 204);color: white;
    
    `
}
function openTest2(){
document.querySelector(".block-bir-variant1 p").style=`
background-color: #fcfcfc;
border: 1px solid #ccc;

`
document.querySelector(".block-bir-variant p").style=`
background-color: #fcfcfc;
border: 1px solid #ccc;
`
document.querySelector(".block-bir-variant2 p").style=`background-color: rgb(98, 177, 204);color: white;`
}

function openTest3(){
  document.querySelector(".block-bir-variant3 p").style=`background-color: rgb(98, 177, 204);color: white;`
  document.querySelector(".block-bir-variant4 p").style=`background-color: #fcfcfc;
  border: 1px solid #ccc;`
  document.querySelector(".block-bir-variant5 p").style=`background-color: #fcfcfc;
  border: 1px solid #ccc;`

}

function openTest4(){

    document.querySelector(".block-bir-variant4 p").style=`background-color: rgb(98, 177, 204);color: white;`
    document.querySelector(".block-bir-variant3 p").style=`background-color: #fcfcfc;
    border: 1px solid #ccc;`
    document.querySelector(".block-bir-variant5 p").style=`background-color: #fcfcfc;
    border: 1px solid #ccc;`

}
function openTest5(){
    document.querySelector(".block-bir-variant5 p").style=`background-color: rgb(98, 177, 204);color: white;`
    document.querySelector(".block-bir-variant4 p").style=`background-color: #fcfcfc;
    border: 1px solid #ccc;`
    document.querySelector(".block-bir-variant3 p").style=`background-color: #fcfcfc;
    border: 1px solid #ccc;`

}


export default function Testpage() {
    const [page,setpage]= useState(1)
const [counter , setCounter]= React.useState(59)
const [counter1 , setCounter1]= React.useState(70)
const[loading,setloading]= useState(false)

useEffect(()=>{
    setloading(true);
    setTimeout(()=>{
        setloading(false);
    },20000);
},[])

React.useEffect(()=>{
    const timer =
    counter > 0 &&  setInterval(()=>setCounter(counter - 1),1000);
    return()=> clearInterval(timer);
},[counter])

React.useEffect(()=>{
    const timer1 =
    counter1 > 0 &&  setInterval(()=>setCounter1(counter1 - 1),1000);
    return()=> clearInterval(timer1);
},[counter1])

  return (
    <div>
        
<div className="letsgo-test">
<div className="test-ichi">
{page==1?(<div>
    <div className="ichi-img-test">
        <img src="https://cdn.goconqr.com/assets/quiz/splash_clock-734cd8dde9a207e2c74c07bc3c40edd41e7a3891c095949da9ff3e266e7e6483.png" alt="" />
    </div>
    <div className="ichi-text-test">
        <h4>Each question in this quiz is timed.</h4>
        <button onClick={()=>setpage(2)}>Begin Test</button>
    </div> 
    
</div>):(
    page===2?(<div > 
<div className="test-center">
<div className="tepa-sanidi-test">
<div className="tepa-tepa-zaibal">
<h6>Question <span>1</span> of <span>2</span></h6>
</div>
<div className="tepa-time">
<box-icon name='timer'></box-icon> <span id='timer-yebat'>00:{counter}</span>
</div>
</div>
</div>
<div className="test-center">
<div className="tepa-line"></div>
</div>
<div className="test-center-margin">
    <div className="test-variant">
        <h3>test-variant</h3>
        <h5>test-variant</h5>
        <div className="varianlaa">
            <div className="block-bir-variant" id='spspspsps' onClick={()=>openTest()}>
                <p >yoqol</p>
            </div>
            <div className="block-bir-variant1"  onClick={()=>openTest1()}>
                <p>yoqol2</p>
            </div>
            <div className="block-bir-variant2"  onClick={()=>openTest2()}>
                <p>yoqol3</p>
            </div>
        </div>
        <div className="buttob-next"><button onClick={()=>setpage(3)}>Next</button></div>
    </div>
</div>
    </div> ):(page==3?(<div>
        <div className="test-center">
<div className="tepa-sanidi-test">
<div className="tepa-tepa-zaibal">
<h6>Question <span>2</span> of <span>2</span></h6>
</div>
<div className="tepa-time">
<box-icon name='timer'></box-icon> <span id='timer-yebat'>00:{counter1}</span>
</div>
</div>
</div>
<div className="test-center">
<div className="tepa-line"></div>
</div>
        <div className="test-center-margin">
    <div className="test-variant">
        <h3>test-variant2</h3>
        <h5>test-variant2</h5>
        <div className="varianlaa">
            <div className="block-bir-variant3" onClick={()=>openTest3()}>
                <p >sur</p>
            </div>
            <div className="block-bir-variant4"  onClick={()=>openTest4()}>
                <p>sur2</p>
            </div>
            <div className="block-bir-variant5"  onClick={()=>openTest5()}>
                <p>sur3</p>
            </div>
        </div>
        <div className="buttob-next"><button onClick={()=>window.location="/Testloader"}>Next</button></div>
    </div>
</div>
    </div>):(page==4?(<div></div>):(<div></div>)))
)
}
</div>

</div>
 

    </div>
  )
}
