import React from 'react'
import { useState } from 'react'
import { Modal,Form,Button, Input, message} from 'antd';
import axios from 'axios';
import url from './Host';
export default function Create_theme_mentor(props) {
const [id,setId]=useState(props.id)
const [isModalOpen, setIsModalOpen] = useState(false);
const showModal = () => {
  setIsModalOpen(true);
};
const handleOk = () => {
  var data=new FormData()
  data.append("name",document.querySelector(".name").value)
  data.append("course",id)
axios.post(`${url}/api/course_data_category`,data,{ headers: { Authorization: "Bearer " + localStorage.getItem("token") } }).then(res=>{
    message.success("create theme")
    setIsModalOpen(false);
}).catch(err=>{
    message.error("don't create")
    setIsModalOpen(false);
})
};

const handleCancel = () => {
  setIsModalOpen(false);
};

  return (
    <div>
 <Button type="primary" onClick={showModal}>
    Create Theme Category
  </Button>
  <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
<Form>
<Input className='name' placeholder='title' />
</Form>
  </Modal>
    
    
    </div>
  )
}
