import{useSelector} from "react-redux";


function Company() {

 
 
 const empState = useSelector((state) => state.empState);
 const {employee} = empState ;

 

return(<div className="p-5">
<h2 className="text-center text-info">Global Software</h2>
<h2>Total Employees:- {employee.length}</h2>
<p >{employee.map((e)=> <p> <h4>{e.Employee_Name+"  "}</h4>
                             <p className="text-info">{e.Project }  {e.Status}</p></p> )}</p>  


</div> )
}
export default Company