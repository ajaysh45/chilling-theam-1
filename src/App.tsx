import React,{Fragment} from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Layout from './Components/Layout';
import Home from './Pages/Home';
// import Table from './Pages/Tables/Table';
import { NavLink } from 'react-router-dom';
import Table from './Pages/Tables/Table';
import Datatable from './Pages/Tables/Datatable';
import Form from './Pages/Tables/Form';

function App() {
  return (
    <h1>Hello Manish</h1>
    <Fragment>
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>}></Route>
          {/* <Route path='/' element={<Home/>}></Route> */}
          <Route path='/datatable' element={<Datatable />}></Route>
          <Route path='/table' element={<Table />}></Route>
      <Route path='/form' element={<Form/>}></Route>
        </Routes>
        </BrowserRouter>
    </Fragment>
  );
}

export default App;
