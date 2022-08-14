import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './main/components/Header'
import  Main from './main/Main';
import Employee from './main/Employees/Employee';
import EmployeeEdit from './main/Employees/EmployeeEdit';
import AddEmployee from './main/Employees/AddEmployee';
import About from './main/components/About';
import Footer from './main/components/Footer';
import Project from '../src/main/Employees/Projects';
import Project_edit from './main/Project/Project_edit';
import ProjectCreate from './main/Project/ProjectCreate';
import Company from './main/Employees/Company';
import { useState } from 'react';


function App() {
  
  const [Emp, setEmp] = useState({
    Employee_Name: "",
    Employee_Id:"",
    Employee_No:"",
    Employee_Email:"",
    Project:"",
    Status:""
  });
  return (




<BrowserRouter>
<Header/>
<Routes>
<Route index element={<Main />} />
<Route path='/' exact element={<Main/>}  ></Route>

<Route path='/Employee' exact element={< Employee setEmp={setEmp}  />}  ></Route>
<Route path='/Employee/create' exact element={< AddEmployee Emp={Emp} setEmp={setEmp} />}  ></Route>
<Route path='/Employee/:id/edit' exact element={< EmployeeEdit Emp={Emp} setEmp={setEmp} />}  ></Route>
<Route path='/Project/:id/edit' exact element={<Project_edit/>}  ></Route>
<Route path='/Project' exact element={<Project/>}  ></Route>
<Route path='/AddProject' exact element={<ProjectCreate/>}  ></Route>
<Route path='/Company' exact element={<Company/>}  ></Route>

<Route path='/about/' element={<About/>}></Route>


</Routes> 
<Footer ></Footer> </BrowserRouter>

  )}











export default App; 
