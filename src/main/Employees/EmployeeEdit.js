
import React,{useState , useEffect} from 'react'
import { useParams , useNavigate} from 'react-router-dom';


function EmployeeEdit() {

  let navigate = useNavigate();
  const {id } = useParams()


  const [Name ,setName] = useState("");
  const [Id , setId] = useState("");
  const [Email , setEmail] = useState("");
  const [No , setNo] = useState();

  const data = {Name,Id,Email,No}
  const nav = useNavigate();
function submit(){
  fetch(`http://localhost:4000/api/Employee/${id}`,{
    method: 'PUT',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
   
    body: JSON.stringify(data)
  });
  console.log(data);
        nav("/Employee")     

      }


      useEffect(() => {
    
        fetch(`http://localhost:4000/api/Employee/${id}`,{  method: 'PUT',}).then(res => res.json()) 
        .then(data => {
         setId(data.Employee_Id);  setName(data.Employee_Name);
          setEmail(data.Employee_Email);
          setNo(data.Employee_No);
        })          
      
      },[]) 

  return (
   <>
    <div className='container p-5'>
        <form className='form-group ' >
           <div>Employee_Id</div><input  defaultValue={Id} className='form-control m-2 ' type="text" onChange={(e)=>{setId(e.target.value)}} ></input>
            <div>Employee_Name</div><input defaultValue={Name}  className='form-control m-2' type="text" onChange={(e)=>{setName(e.target.value)}} ></input>
            <div>Employee_Email</div><input defaultValue={Email}  className='form-control m-2' type="text" onChange={(e)=>{setEmail(e.target.value)}} ></input>
            <div>Employee_No</div><input defaultValue={No}  className='form-control m-2' type="text" onChange={(e)=>{setNo(e.target.value)}} ></input>
           <button type='submit' className='btn btn-info'  onClick={()=>{submit()}} >Edit</button>
        </form>
    </div>


</>
  )
}

export default EmployeeEdit