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
  data.append("content",document.querySelector(".content112").value)
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

    window.location.reload()
}).catch(err=>{
    message.error("don't create")
    setIsModalOpen(false);
})
};
function onFile(e) {
  console.log(e.target.checked);
   setOnImage(e.target.checked) 
   if(e.target.checked){
   document.querySelector(".image").type="file"
   }else{
    document.querySelector(".image").type="text"
   }
}
function onFile2(e) {
  console.log(e.target.checked);
    setOnVideo(e.target.checked)
    if(e.target.checked){
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
   var ss=res.data.filter(item=>item.course==id)
        setCategory(ss)
  
        
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
      <div></div>
    )}

  <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
<Input className='name' placeholder='title' />
<br />
<br />
<Input className='content112' placeholder='content' />
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
{category.map((item,key)=>{
    return <option value={item.id}>{item.name}</option>
})}
</select>

  </Modal>
    
    
    </div>
  )
}
