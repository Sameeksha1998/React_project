import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './main/components/Header';
import  Main from './main/Main';
import Product from './main/Product';
import ProductCreate from './main/ProductCreate';
import ProductEdit from './main/ProductEdit';
import About from './main/components/About';
import Footer from './main/components/Footer';
import Project from '../src/main/Project/Project';

function App() {
  return (

 <BrowserRouter>
<Header />
<Routes>
<Route index element={<Main />} />
<Route path='/' exact element={<Main/>}  ></Route>
<Route path='/Product' exact element={<Product/>}  ></Route>
<Route path='/Product/create' exact element={<ProductCreate/>}  ></Route>
<Route path='/Product/:id/edit' exact element={<ProductEdit/>}  ></Route>
<Route path='/Project' exact element={<Project/>}  ></Route>
<Route path='/about/' element={<About/>}></Route>
</Routes> 
<Footer c></Footer> </BrowserRouter>
  )}











export default App; 
