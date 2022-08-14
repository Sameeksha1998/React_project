import React from "react";
import { useEffect , useState} from "react";
import { Link , NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteEmp, getEmp } from "../../features/empSlice";
import { useNavigate } from "react-router-dom";
import "./Table.css";
import EmployeeEdit from "../Employees/EmployeeEdit";


const  Table = ({
  columns = null,
  hover = true,
  striped = true,
getval=null ,  Edit=null  , setEmp ,

}) => {
  const getCaps = ( head, field   ) => {
    if (head) return head.toUpperCase();
    return field.toUpperCase();
  };
  const nav = useNavigate();

 const dispatch = useDispatch()

const handleDelete=(_id)=>{ 
   dispatch(deleteEmp(_id));
  }
useEffect(() => {
  dispatch(getEmp());
}, [dispatch]);




  return (
    <div>
       <table>
        <thead>
          <tr>
            {columns &&
              columns.map((head , i) => (
                <th >{getCaps(head.header, head.field)}</th>
              ))}
          </tr>
        </thead>
        <tbody>

    
          {getval &&
           getval.map ((row , i) => (
              <tr key={i} className={`${hover && "hover"} ${striped && "striped"}`}>
                {columns.map((col) => (<>
                  <td>{row[col.field]}</td>
                  </>
                 ))}  

           {Edit === "Employee"?  <> 
              
               <Link  onClick={()=>{setEmp(row)}} to={`/Employee/${row._id}/edit`} ><i className="fa fa-edit fa-2x text-info" ></i></Link> 
               
               <button   style={{border:"none"}} onClick={()=>handleDelete(row._id)}   ><i className="fa fa-trash fa-2x text-primary" ></i></button> 
                                 </> : "" }

                 
                 
         
                
      
                   
              </tr>
            ))}
        </tbody>
      </table> 
    
      
    </div>
  );
};

export default Table