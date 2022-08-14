
import React,{useState , useEffect} from 'react'
import { useParams , useNavigate} from 'react-router-dom';
import { empAdd, updateEmp } from '../../features/empSlice';
import{useDispatch, useSelector} from "react-redux";


function EmployeeEdit({Emp,setEmp}) {
let nav = useNavigate(); 
 const {id } = useParams()
 const dispatch = useDispatch();
 const empState = useSelector((state) => state.empState);
 const {employee} = empState ;
 
 const handleSubmit = (e) => {
   e.preventDefault();
   dispatch(updateEmp(Emp));

 
   setEmp({
      Employee_Name:"",
      Employee_Id:"",
      Employee_No:"",
      Employee_Email:"",
      Project:"",
      Status:""
    });
   }
   
       useEffect(() => {
  
     },[]) 

  return (
   <>
        <div style={{marginLeft:"350px" , marginRight:"350px"}} >
       
        <form className='form-group '  onSubmit={handleSubmit} >
           <div   className='text-info p-2' >Employee_Id</div>
           <input  value={Emp.Employee_Id} style={{border: "1px solid"}}  className='form-control m-2' type="text"  onChange={(e) => setEmp({ ...Emp, Employee_Id: e.target.value })} ></input>

            <div  className='text-info p-2' >Employee_Name</div>
            <input value={Emp.Employee_Name} style={{border: "1px solid"}}  className='form-control m-2' type="text"  onChange={(e) => setEmp({ ...Emp, Employee_Name: e.target.value })}></input>

            <div className='text-info p-2'>Employee_Email</div>
            <input value={Emp.Employee_Email} style={{border: "1px solid"}}  className='form-control m-2' type="text" onChange={(e)=>setEmp({...Emp, Employee_Email:e.target.value  })}></input>

            <div className='text-info p-2'>Employee_No</div>
            <input value={Emp.Employee_No} style={{border: "1px solid"}}  className='form-control m-2' type="text" onChange={(e)=>setEmp({...Emp, Employee_No:e.target.value})} ></input>

            <div className='text-center text-info p-3 m-5'>
            <h3 className='text-info'>Project Details</h3>
            <input value={Emp.Project} style={{border: "1px solid"}}  className='form-control m-2' type="text" onChange={(e)=>setEmp({...Emp, Project:e.target.value})} ></input>

            
            <input value={Emp.Status} style={{border: "1px solid"}}  className='form-control m-2' type="text" onChange={(e)=>setEmp({...Emp, Status:e.target.value})} ></input>
            
           <button type='submit' className='btn btn-info'  >Edit</button>
           {
            empState.updateStatus === "pending"? <h3 className='alert alert-info'>Updating........</h3> : null
           }
           {
            empState.updateStatus === "rejected"? <h3 className='alert alert-danger'>{empState.updateError}</h3> : null
           }
           {
            empState.updateStatus === "success"? <h3 className='alert alert-success'>Successfull Updated{nav("/Employee")}</h3> : null
           }
           </div> 
        </form>
    </div>
 
</>)
}

export default EmployeeEdit ; 