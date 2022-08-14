import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { empAdd } from '../../features/empSlice';

function AddEmployee({Emp,setEmp}) {

  const dispatch = useDispatch()
  const empState = useSelector((state)=> state.empState)
  
console.log("add", Emp);
const [add, setadd] = useState({
  Employee_Name:"",
  Employee_Id:"", Employee_Email:"",Employee_No:"",Project:"", Status:""

})

const nav = useNavigate()
const submit=(e)=>{
  e.preventDefault();
dispatch(empAdd(add))
   setadd({
    Employee_Name:"", Employee_Id:"", Employee_Email:"", Employee_No:"", Project:"", Status:""
  })
  if(empState.addStatus==="success"){
  nav("/Employee")}
  else if(empState.addStatus==="rejected"){
    alert("form can't be empty")
  }
  else{
    console.log("loading");
  }
}
 

 


  return (
    <>
        <div className='container ' >
          <h3 className='text-center text-info'>Add Products</h3>
            
            <div style={{marginLeft:"250px" , marginRight:"250px"}}>
            <form className='form-group m-4'   onSubmit={submit}>
               
              <h4 >Name</h4>
              <input className='form-control p-3 ' style={{border: "1px solid"}} placeholder='Enter  name' type="text" value={add.Employee_Name} 
              onChange={(e) => setadd({ ...add, Employee_Name: e.target.value })} ></input>
              
              <h4>Id</h4><input  style={{border: "1px solid"}}   className='form-control  p-3'  placeholder='Enter Id'type="text" value={add.Employee_Id} onChange={(e)=>setadd({...add, Employee_Id: e.target.value})} ></input>
              
              <h4>No</h4><input style={{border: "1px solid"}}  className='form-control  p-3'  placeholder='Enter No'type="text" value={add.Employee_No} onChange={(e)=>setadd({...add, Employee_No: e.target.value})} ></input>
              
              <h4>Email</h4><input style={{border: "1px solid"}}  className='form-control  p-3'  placeholder='Enter Email' type="text" value={add.Employee_Email} onChange={(e)=>setadd({...add, Employee_Email: e.target.value})} ></input>
              
              <div  className='text-center text-info p-3 m-5'><h3>Project Details</h3>
              <input style={{border: "1px solid"}}  className='form-control  p-3 m-2'  placeholder='Enter assign Project' type="text" value={add.Project} onChange={(e)=>setadd({...add, Project: e.target.value})} ></input>

               <input style={{border: "1px solid"}}  className='form-control  p-3 m-2'  placeholder='Enter Status of project' type="text" value={add.Status} onChange={(e)=>setadd({...add, Status: e.target.value})} ></input>
              </div>
               <div className='text-center'><button type='submit' className='btn btn-info text-center'  >Submit</button></div> 
              
               {empState.addStatus ==="rejected"? <p className='alert alert-danger'>{empState.addError}</p> :""}
               {empState.addStatus === "success"? <p className='alert alert-success'>Employee Added successfully</p>:""}
               
           
               </form> </div>
               </div>


    </>
  )
}

export default AddEmployee