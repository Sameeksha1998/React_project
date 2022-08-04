import React,{useState , useEffect} from 'react'
import { useParams , useNavigate} from 'react-router-dom';



function Project_edit() {
  


  let navigate = useNavigate();
  const {id } = useParams()


  const [Name ,setName] = useState("");
  const [Project , setProject] = useState("");
  const [Technology , setTechnology] = useState("");
  const [Start_date , setStart_date] = useState();

  const data = {Name,Project,Technology,Start_date}
  const nav = useNavigate();
function submit(){
  fetch(`http://localhost:4000/api/Project/${id}`,{
    method: 'PUT',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
   
    body: JSON.stringify(data)
  });
  console.log(data);
        nav("/Project")     

      }


      useEffect(() => {
    
        fetch(`http://localhost:4000/api/Project/${id}`,{  method: 'PUT',}).then(res => res.json()) 
        .then(data => {
        setName(data.Employee_Name);
          setProject(data.Project);
          setTechnology(data.Technology);
          setStart_date(data.Start_date)
        })          
      
      },[]) 

  return (
   <>
    <div className='container p-5'>
        <form className='form-group ' >
           <div>Employee_Name</div><input  defaultValue={Name} className='form-control m-2 ' type="text" onChange={(e)=>{setName(e.target.value)}} ></input>
            <div>Project</div><input defaultValue={Project}  className='form-control m-2' type="text" onChange={(e)=>{setProject(e.target.value)}} ></input>
            <div>Technology</div><input defaultValue={Technology}  className='form-control m-2' type="text" onChange={(e)=>{setTechnology(e.target.value)}} ></input>
            <div>Start_date</div><input defaultValue={Start_date}  className='form-control m-2' type="text" onChange={(e)=>{setStart_date(e.target.value)}} ></input>
           <button type='submit' className='btn btn-info'  onClick={()=>{submit()}} >Edit</button>
        </form>
    </div>


</>
  )
}

export default Project_edit;