import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer';

const MainLayout = () => {
    return (
        <>
            <Navbar></Navbar>
            <main className='max-w-full mx-auto min-h-[calc(100vh-355px)] bg-[#f5f5f5]'>
                <Outlet/>
            </main>
            <Footer></Footer>
            
        </>
    );
};

export default MainLayout;