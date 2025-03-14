import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";

const MainLayout = () => {
    return (
        <div className="flex flex-col min-h-screen">
        <nav className='w-full mx-auto'>
        <Navbar></Navbar>
        </nav>
        <main className='flex-grow w-full mx-auto bg-gray-900'>
        <Outlet></Outlet>
        </main>
        <Footer></Footer>
    </div>
    );
};

export default MainLayout;