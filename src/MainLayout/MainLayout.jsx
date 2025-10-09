
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MainLayout = () => {
    const notify = () => toast("Wow so easy!");
    return (
        <>
            <Navbar></Navbar>
            <main className='max-w-full mx-auto min-h-[calc(100vh-355px)] bg-[#f5f5f5]'>
                 <Outlet/>
            </main>
            <Footer></Footer>
            <div>
        <button onClick={notify}>Notify!</button>
        <ToastContainer />
      </div>
        </>
    );
};

export default MainLayout;