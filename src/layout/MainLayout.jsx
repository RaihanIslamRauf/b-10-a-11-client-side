import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar";

const MainLayout = () => {
    return (
        <div className="flex flex-col min-h-screen">
        <nav className='w-full mx-auto'>
        <Navbar></Navbar>
        </nav>
        <main className='flex-grow lg:w-full px-6 py-12 mx-auto bg-base-200'>
        <Outlet></Outlet>
        </main>
    </div>
    );
};

export default MainLayout;