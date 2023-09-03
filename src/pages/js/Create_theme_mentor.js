import React from 'react'
import { useState } from 'react'
import { Modal,Form,Button, Input, message,Checkbox} from 'antd';
import { useEffect } from 'react';
import axios from 'axios';
import url from './Host';
export default function Create_theme_mentor(props) {
const [id,setId]=useState(props.id1)
const [isModalOpen, setIsModalOpen] = useState(false);
const [onimage, setOnImage] = useState(false);
const [onvideo, setOnVideo] = useState(false);



const [category,setCategory]=useState([])
const showModal = () => {
  setIsModalOpen(true);
};
const handleOk = () => {
  var data=new FormData()
  data.append("name",document.querySelector(".name").value)
  data.append("content",document.querySelector(".content").value)
  data.append("extra_data",document.querySelector(".extra_data").value)
  data.append("category",document.querySelector(".category").value)
if(onimage){
    data.append("image",document.querySelector(".image").files[0])  
}else{
    data.append("image",document.querySelector(".image").value)
}
if(onvideo){
    data.append("video",document.querySelector(".video").files[0])  
}else{
    data.append("video",document.querySelector(".video").value)
}

axios.post(`${url}/api/course_data_theme`,data,{ headers: { Authorization: "Bearer " + localStorage.getItem("token") } }).then(res=>{
    message.success("create theme")
    setIsModalOpen(false);
}).catch(err=>{
    message.error("don't create")
    setIsModalOpen(false);
})
};
function onFile(e) {
   setOnImage(e.target.value) 
   if(e.target.value){
   document.querySelector(".image").type="file"
   }else{
    document.querySelector(".image").type="text"
   }
}
function onFile2(e) {
    setOnVideo(e.target.value)
    if(e.target.value){
        document.querySelector(".video").type="file"
        }else{
         document.querySelector(".video").type="text"
        }
}
const handleCancel = () => {
  setIsModalOpen(false);
};
useEffect(()=>{
    axios.get(`${url}/api/course_data_category`,{ headers: { Authorization: "Bearer " + localStorage.getItem("token") } }).then(res=>{
      console.log(res.data,"asdasabbas");
   var ss=res.data.filter(item=>item.course==id)
        setCategory(ss)
        console.log(id,"abnbas");
        
    }).catch(err=>{

    })
},[])
  return (
    <div>

  {category.length>0?(
 <Button type="primary" onClick={showModal}>
    Create Theme
  </Button>
    ):(
      <></>
    )}

  <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
<Input className='name' placeholder='title' />
<br />
<br />
<Input className='content' placeholder='content' />
<br />
<br />
<Input type="number" className='extra_data' placeholder='extra_data' />
<br />
<br />
<Checkbox onChange={(e)=>{onFile(e)}}>Image File</Checkbox>
<Input className='image'  placeholder='image' />
<br />
<br />
<Checkbox onChange={(e)=>{onFile2(e)}}>Video File</Checkbox>
<Input className='video' placeholder='video' />
<br />
<br />
<select className='category'>
{category.map(item=>{
    return <option value={item.id}>{item.name}</option>
})}
</select>

  </Modal>
    
    
    </div>
  )
}
