import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux';
import { projectAdd, ProjectGet } from '../../features/postSlice';

function ProjectCreate() {

  const dispatch = useDispatch()
  const postState = useSelector((state)=> state.postState)
  

const [add, setadd] = useState({
 Project:"", Employee_Name:"", Start_date:"", Technology:""

})
  

  const nav = useNavigate();
  const submit=(e)=>{
    e.preventDefault();
  dispatch(projectAdd(add))
     setadd({
      Employee_Name:"", Employee_Id:"", Employee_Email:"", Employee_No:""
    })
    if(postState.addStatus==="success"){
    nav("/Project")}
    else if(postState.addStatus==="rejected"){
      alert("form can't be empty")
    }
    else{
      console.log("loading");
    }
  }
   
      
    

  return (
    <>
        <div className='container ' >
          <h5 className='text-center text-info'>Add Project</h5>
            <div className=''>
            <form className='form-group m-4'  >
               
               <h5>Name</h5><input className='form-control p-2' placeholder='Enter  name' type="text" value={add.Employee_Name} 
               onChange={(e) => setadd({ ...add, Employee_Name: e.target.value })} style={{border: "1px solid"}}  ></input>
              
              <h5>Project</h5>
              <input  style={{border: "1px solid"}}  className='form-control  p-3'  placeholder='Enter Project Name'  type="text" value={add.Project} onChange={(e)=>{setadd({...add, Project :e.target.value})}} ></input>
             
              <h5>Technology</h5>
              <input style={{border: "1px solid"}}  className='form-control  p-3'  placeholder='Enter Project Technology'type="text" value={add.Technology} onChange={(e)=>setadd({ ...add, Technology: e.target.value })} ></input>

              <h5>Start date</h5>
              <input style={{border: "1px solid"}}  className='form-control  p-3'  placeholder='Enter Start date' type="text" value={add.Start_date} onChange={(e)=>setadd({ ...add, Start_date: e.target.value })} ></input>
               <div className='text-center'>
               
               <button type='submit' className='btn btn-info text-center'  onClick={()=>{submit()}}   >Submit</button></div> 
               
            </form> </div>
            </div>


    </>
  )
}


export default ProjectCreate