import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Table.css";
const  Table = ({
  data = null,
  columns = null,
  hover = true,
  striped = true,
getval,  api , Edit
  
}) => {
  const getCaps = ( head, field   ) => {
    if (head) return head.toUpperCase();
    return field.toUpperCase();
  };


  const del=(e ,Id , product)=>{ 
 
    alert(`are you sure to delete!!${product}`)
   fetch(`${api}/${Id}`, {
     method: 'DELETE'
 }) 
 getval();
  }

 

  return (
    <div>
      <table>
        <thead>
          <tr>
            {columns &&
              columns.map((head) => (
                <th>{getCaps(head.header, head.field)}</th>
              ))}
          </tr>
        </thead>
        <tbody>
          {data &&
           data.map ((row , i) => (
              <tr key={i} className={`${hover && "hover"} ${striped && "striped"}`}>
                {columns.map((col) => (<>
                  <td>{row[col.field]}</td>
                  </>
                ))}{/* <Link to={`/Project/${row.Employee_Name}`} onClick={()=>{getpro(row.Employee_Name)}} >project</Link> */}
                <button style={{border:"none"}} onClick={(e)=>{del(e, row._id , row.Employee_Name) } } ><i className="fa fa-trash fa-2x text-danger"></i></button>
                {Edit === "Employee"?   <Link to={`/Employee/${row._id}/edit`}  ><i className="fa fa-edit fa-2x text-info" ></i></Link>  : ""}
                 {Edit === "Project" ?   <Link to={`/Project/${row._id}/edit`}  ><i className="fa fa-edit fa-2x text-info"></i></Link> : ""}
                   
                   
              </tr>
            ))}
        </tbody>
      </table>
      {data ? null : <p>No Row to show :)</p>}
    </div>
  );
};

export default Table