import React from 'react'
import '../css/WiewAll.css'
import Qongro from '../img/Qongiro.png'
function WiewAll() {
    return (
        <div>
            <h1 style={{textAlign:'center'}}></h1>
            <div className="wiew_div">
                <h3 className='logo'>Notifications</h3>
                {/* <div className="icon">
                    <img  className='ooo'  src={Qongro} alt="" />
                </div>
                <p className='qongiro_title'>You don't have any notifications yet!</p> */}
                <div className="wiew_sms_big">
                    <div className="sms">
                        <div className="qizil"></div>
                        <div className="data_title">
                            <p className='unred'>Unread message</p>
                            <p className='data'>10:00</p>
                        </div>
                        <div className="p_lorem_sms">
                            <p className='lorem_sms'>Update! Now you can pay for the course online via paymi.Сool isn't it 😊?</p>
                        </div>
                    </div>
                    <div className="sms">
                        <div className="qizil"></div>
                        <div className="data_title">
                            <p className='unred'>Unread message</p>
                            <p className='data'>сегодня.</p>
                        </div>
                        <div className="p_lorem_sms">
                            <p className='lorem_sms'>Site news. A new course on learning Frontend has been added to the site. it's incredible isn't it 🙃?

                            </p>
                        </div>
                    </div>
                    <div className="sms">
                        <div className="qizil"></div>
                        <div className="data_title">
                            <p className='unred'>Unread message</p>
                            <p className='data'>15 август.</p>
                        </div>
                        <div className="p_lorem_sms">
                            <p className='lorem_sms'>Warning! Course prices are steadily rising. Сool right? 🫠
                            </p>
                        </div>
                    </div>
                </div> 
            </div>
        </div>
    )
}

export default WiewAll