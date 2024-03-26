import { NavLink } from "react-router-dom";


const Header = () => {

    
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    <NavLink to="/" className={({isActive}) => isActive ? 'font-semibold btn btn-outline hover:bg-[#23BE0A] border-[#23BE0A] text-[#23BE0A] mr-6' : 'mr-6'}><button className="text-lg">Home</button></NavLink>

                    <NavLink to="/listed" className={({isActive}) => isActive ? 'font-semibold btn btn-outline hover:bg-[#23BE0A] border-[#23BE0A] text-[#23BE0A] mr-6' : 'mr-6'}><button className="text-lg">Listed Books</button></NavLink>

                    <NavLink to="/pages" className={({isActive}) => isActive ? 'font-semibold btn btn-outline hover:bg-[#23BE0A] border-[#23BE0A] text-[#23BE0A] mr-6' : 'mr-6'}><button className="text-lg">Pages to Read</button></NavLink>
                    </ul>
                </div>
                <a className="text-[#131313] font-bold text-2xl">Book Vibe</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-3">
                <NavLink to="/" className={({isActive}) => isActive ? 'font-semibold btn btn-outline hover:bg-[#23BE0A] border-[#23BE0A] text-[#23BE0A] mr-6' : 'mr-6'}><button className="text-lg">Home</button></NavLink>

                <NavLink to="/listed" className={({isActive}) => isActive ? 'font-semibold btn btn-outline hover:bg-[#23BE0A] border-[#23BE0A] text-[#23BE0A] mr-6' : 'mr-6'}><button className="text-lg">Listed Books</button></NavLink>

                <NavLink to="/pages" className={({isActive}) => isActive ? 'font-semibold btn btn-outline hover:bg-[#23BE0A] border-[#23BE0A] text-[#23BE0A] mr-6' : 'mr-6'}><button className="text-lg">Pages to Read</button></NavLink>
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn lg:mr-4 bg-[#23BE0A] rounded-lg text-white">Sign In</a>
                <a className="btn rounded-lg bg-[#59C6D2] text-white">Sign Up</a>
            </div>
        </div>
    );
};

export default Header;