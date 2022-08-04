import React,{useState , useEffect} from 'react'
import { useParams , useNavigate} from 'react-router-dom';



function Name() {
  


  let navigate = useNavigate();
  const {name } = useParams()


  const [data ,setdata] = useState([]);
  const [length ,setlength] = useState(null);
  const nav = useNavigate();



      useEffect(() => { 
        
        fetch(`http://localhost:4000/api/Project/name/?Name=${name}`).then((e)=>{
           
                e.json().then((datas)=>{
             setdata(datas); 
             setlength(datas.length())
                })
              })
             })    


        

  return (
   <> 
{  data.map((i)=>

<form className='form-group p-5 m-5' >     
<div className='text-info '>Employee Name<input  Value={i.Employee_Name}  className='form-control' type="text" ></input></div>
<div  className='text-info'>Project<input       Value={i.Project}         className='form-control m-2' type="text"  ></input></div>
<div  className='text-info' >Technology<input     Value={i.Technology}     className='form-control m-2' type="text" ></input></div>
<div  className='text-info'>Start Date<input      Value={i.Start_date}     className='form-control m-2' type="text" ></input> </div>
   </form> 
)}
 



{/* 
    <div className='container p-5'> 
        <form className='form-group ' > 
        
           <div>Employee_Name</div><input  Value={res.Employee_Name}  className='form-control m-2 ' type="text" ></input>
            <div>Project</div><input       Value={res.Project}         className='form-control m-2' type="text"  ></input>
            <div>Technology</div><input     Value={res.Technology}     className='form-control m-2' type="text" ></input>
            <div>Start_date</div><input      Value={res.Start_date}     className='form-control m-2' type="text" ></input> 
  
        </form>
    </div>
 */}

</>
  )
        }
        


export default Name;