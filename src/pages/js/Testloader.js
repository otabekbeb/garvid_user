import React, { useState, useEffect } from 'react'
import '../css/Testpage.css'



export default function Testloader() {

  const [loading, setloading] = useState(false)

  useEffect(() => {
    setloading(true);
    setTimeout(() => {
      setloading(false);
    }, 18000);
  }, [])

  return (
    <div>
         
<div className="letsgo-test" >
<div className="test-ichi1">
<div>
 
    <div>
      {loading?((<div className='loader-suka'><span className="loader1"></span></div>)):(<div>

<div className="butonn-la">
<div className="asaloriza">
<div className="ruzultat-foiz">
        <h2>25 <span>%</span> </h2>
    </div>
    <div className="rezultat-text">
    <box-icon type='solid' name='bar-chart-alt-2' color="#444"></box-icon><p><span>2</span> out of <span>2</span> points</p>
    </div>
</div>
<button onClick={()=>window.location="/Testpage"}>Retry</button>
</div>

                <div className="butonn-la">
                  <div className="asaloriza">
                    <div className="ruzultat-foiz">
                      <h2>25 <span>%</span> </h2>
                    </div>
                    <div className="rezultat-text">
                      <box-icon type='solid' name='bar-chart-alt-2' color="#444"></box-icon><p><span>5</span> out of <span>3</span> points</p>
                    </div>
                  </div>
                  <button onClick={() => window.location = "/Testpage"}>Retry</button>
                </div>

              </div>)}


            </div>
          </div>


</div>

        </div>

      </div>

  
  )
}
