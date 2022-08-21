import React from "react";

import { Link  } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteEmp } from "../../features/empSlice";

import "./Table.css";


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
  

 const dispatch = useDispatch()

const handleDelete=(_id)=>{ 
   dispatch(deleteEmp(_id));
   
  }



// useEffect(() => {

//   dispatch(getEmp());
// }, [dispatch ]);




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
              
           {Edit === "Project"?  <> 
              
              <Link  onClick={()=>{setEmp(row)}} to={`/Employee/Project/${row._id}/edit`} ><i className="fa fa-edit fa-2x text-info" ></i></Link> 
              
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