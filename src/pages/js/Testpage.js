import React,{useState,useEffect} from 'react'
import '../css/Testpage.css'
import Navbar from './Navbar'

export default function Testpage() {
    const [page,setpage]= useState(1)
const [counter , setCounter]= React.useState(40)
React.useEffect(()=>{
    const timer =
    counter > 0 &&  setInterval(()=>setCounter(counter - 1),1000);
    return()=> clearInterval(timer);
},[counter])
  return (
    <div>
        <Navbar/>
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
<h6>Question <span>1</span> of <span>10</span></h6>
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
            <div className="block-bir-variant">
                <p>yoqol</p>
            </div>
            <div className="block-bir-variant">
                <p>yoqol2</p>
            </div>
            <div className="block-bir-variant">
                <p>yoqol3</p>
            </div>
        </div>
        <div className="buttob-next"><button>Next</button></div>
    </div>
</div>
    </div> ):(<div></div>)
)
}
</div>

</div>
 

    </div>
  )
}
