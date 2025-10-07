import React from 'react';
import Home from '../Pages/Home';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer';

const Root = () => {
    return (
        <div className='flex flex-col min-h-screen'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;