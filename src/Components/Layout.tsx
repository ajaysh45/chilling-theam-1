import React, { Fragment } from "react";
import Header from './Header';
import Footer from './Footer';
import Home from "../Pages/Home";
// import {Outlet} from "react-router-dom";

const Layout = () => {
    return (
        <>
        <div id="layout-wrapper">
            <Header/>
           <Home></Home>     {/* <Outlet/> */}
            <Footer/>
            </div>
            </>
    );
}

export default Layout;