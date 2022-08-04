import React, { useState, useEffect  } from 'react'
import { Link, NavLink   } from 'react-router-dom';
import Table from './components/index';

function Product() {


 const [show, setshow] = useState("");
 const [pro, setPro]= useState([]);
  const [project, setProject]= useState([]); 


// get api call
 function getValue(){
  fetch("http://localhost:4000/api/Employee").then((data)=>{
    data.json().then((datas)=>{
 setPro(datas)
    })
  })
 } 

 // useeffect
useEffect(() => { console.log(show,"oooooo");
    getValue();   
 /*  getProject(Name); */ 
}, [])



//specific user project
function getProject(Name){  
  fetch(`http://localhost:4000/api/project/?Name=${Name}`).then((data)=>{
    data.json().then((pro)=>{
    setProject(pro) 
    console.log("getpro",pro);
  
   pro.map((a)=>{setshow(a)});
     
      return document.getElementById("bb").innerHTML = show.Project;
  
  
      
    })
  })
  
}

//delete employee

/* const del=(Id , product)=>{ 
   alert(`are you sure to delete!!${product}`)
  fetch(`http://localhost:4000/api/listings/${Id}`, {
    method: 'DELETE'
})
getValue();
}
 */

const columns = [
  { field: "Employee_Id", header: "Employee Id" },
  { field: "Employee_Name", header: "Employee Name" },
  { field: "Employee_Email", header: "Employee Email" },
  { field: "Employee_No", header: "Employee No" },
  
];

  return (
   <>  <Table getpro={getProject} getval={getValue}  data={pro} columns={columns} hover={true} striped={true} />
      
{/* <table  className='table table.hover' > <thead class="thead-light">
<tr className='bg-light '>
<th className="p-2 ">Employee Id</th>
<th className="p-2">Employee Name</th>
<th className="p-2 ">Employee_Email</th>
<th className="p-2 ">Employee_No</th>
<th >Actions</th>
</tr> </thead>
<tbody>
{  pro.map((Product , i)=>

<tr key={i} className="p-5"  >
  <td className="">{Product.Employee_Id}</td> 
  <td className="">{Product.Employee_Name}</td> 
  <td className="">{Product.Employee_Email}</td>
  <td className="">{Product.Employee_No}</td>
  <td><button  onClick={(e)=>{getProject(Product.Employee_Name); }} ><i>Project</i></button></td>
  <td ><button  style={{border:'none'}} onClick={()=>{del(Product._id, Product.product)}}><i className="fa fa-trash text-info"></i></button> 
  <Link to={`/Product/${Product._id}/edit`}  ><i className="fa fa-edit text-info"></i></Link>
   </td> </tr> 
)}
 
</tbody></table> 
 <table id='dataTable'>
<td>{ project.map((Product , i)=>
 
<tr key={i} className="p-5" >
  <td className="">{Product.Project}</td>
  <td className="">{Product.Technology}</td>
  <td className="">{Product.Start_date}</td> 
 
</tr>
)}</td>
</table> */}  
   </>
  )
}

export default Product