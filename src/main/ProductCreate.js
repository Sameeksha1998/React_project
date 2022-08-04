import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'


function ProductCreate() {

  const [Employee_Name ,setName] = useState("");
  const [Employee_Id , setId] = useState("");
  const [Employee_Email , setEmail] = useState("");
  const [Employee_No , setNo] = useState("");

  

  const nav = useNavigate();
function submit(){
  fetch("http://localhost:4000/api/Employee",{
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ Employee_Name,Employee_Id, Employee_Email,Employee_No})
  });
      
        nav("/product")     

      }
      
    

  return (
    <>
        <div className='container ' >
          <h3 className='text-center text-info'>Add Products</h3>
            <div className=''>
            <form className='form-group m-4'  >
               <div >Name<input className='form-control p-2' placeholder='Enter  name' type="text" value={Employee_Name} onChange={(e)=>{setName(e.target.value)}} ></input></div>
              
              <div>Id</div><input   className='form-control  p-3'  placeholder='Enter Id'type="text" value={Employee_Id} onChange={(e)=>{setId(e.target.value)}} ></input>
              <div>No</div><input className='form-control  p-3'  placeholder='Enter No'type="text" value={Employee_No} onChange={(e)=>{setNo(e.target.value)}} ></input>
              <div>Email</div><input className='form-control  p-3'  placeholder='Enter Email' type="text" value={Employee_Email} onChange={(e)=>{setEmail(e.target.value)}} ></input>
               <div className='text-center'><button type='submit' className='btn btn-info text-center'  onClick={()=>{submit()}}   >Submit</button></div> 
               
            </form> </div>
            </div>


    </>
  )
}

export default ProductCreate