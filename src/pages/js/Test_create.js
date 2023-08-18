import React from 'react'
import "../css/Test_create.css"
import { BiDownload } from "react-icons/bi"
import { GrFormClose } from "react-icons/gr"


export default function Test_create() {
    return (
        <div>
            <div className="test_create">
                <div className="test_create_header">
                    <div className="test_create_card">
                        <div className="test_close_btn"><GrFormClose /></div>
                        <div className="test_db">
                            <div className="test_create_inside">
                                <label htmlFor="">Question:</label>
                                <input type="text" name="" id="" />
                            </div>
                        </div>

                        <div className="test_create_option">
                            <label htmlFor="">A:</label>
                            <input type="text" name="" id="" />
                        </div>
                        <div className="test_create_option">
                            <label htmlFor="">B:</label>
                            <input type="text" name="" id="" />
                        </div>
                        <div className="test_create_option">
                            <label htmlFor="">C:</label>
                            <input type="text" name="" id="" />
                        </div>
                        <div className="test_create_option">
                            <label htmlFor="">D:</label>
                            <input type="text" name="" id="" />
                        </div>
                        <div className="test_df">
                            <div className="test_create_inside">
                                <label htmlFor="">Image:</label>
                                <input type="file" name="" id="" className='test_img' />
                                <div className="test_img_btn"><BiDownload className='download_icon' /> Download image</div>
                            </div>
                            <button className='test_send_btn'>Send</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
