import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './main/components/Header';
import  Main from './main/Main';
import Employee from './main/Employees/Employee';
import EmployeeEdit from './main/Employees/EmployeeEdit';
import AddEmployee from './main/Employees/AddEmployee';
import About from './main/components/About';
import Footer from './main/components/Footer';
import Project from '../src/main/Project/Project';
import Project_edit from './main/Project/Project_edit';
import ProjectCreate from './main/Project/ProjectCreate';
import Name from './main/Project/Name';

function App() {
  return (

 <BrowserRouter>
<Header />
<Routes>
<Route index element={<Main />} />
<Route path='/' exact element={<Main/>}  ></Route>
<Route path='/Employee' exact element={<Employee/>}  ></Route>
<Route path='/Employee/create' exact element={<AddEmployee/>}  ></Route>
<Route path='/Employee/:id/edit' exact element={<EmployeeEdit/>}  ></Route>
<Route path='/Project/:id/edit' exact element={<Project_edit/>}  ></Route>
<Route path='/Project/name/:name/edit' exact element={<Name/>}  ></Route>
<Route path='/Project' exact element={<Project/>}  ></Route>
<Route path='/AddProject' exact element={<ProjectCreate/>}  ></Route>
<Route path='/about/' element={<About/>}></Route>

</Routes> 
<Footer c></Footer> </BrowserRouter>
  )}











export default App; 
