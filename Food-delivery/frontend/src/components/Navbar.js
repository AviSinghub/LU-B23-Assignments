import React, { useState } from 'react'
import logofh from "../assets/logofh.png"
import { Link ,useNavigate } from 'react-router-dom'
import{RiShoppingCart2Fill} from 'react-icons/ri';
import{FaUserLarge} from 'react-icons/fa6';


const Navbar = () => {
    const[showMenu,setShowMenu] = useState(false);
    const handleShowMenu =() =>{
        setShowMenu(preview => !preview)
    }

    const isAuthenticated = !!localStorage.getItem("authToken");

    const navigate = useNavigate()
    const handleLogout = ()=>{
        localStorage.removeItem("authToken");
        navigate("/login")
    }



  return (
    <nav className='fixed shadow-md w-full h-16 bg-yellow-100 px-2 md:px-4 z-50 '>
        {/* desktop */}

        <div className="flex items-center h-full justify-between">
           <Link to={""}>
                <div className="h-10 inline-flex " >
                    <img src={logofh} className="h-full" alt='img'/> <p className=' text-sm md:text-2xl  items-center  my-1 ml-2 font-bold text-red-500'>Food Hunter</p>
                </div>
            </Link>

            {/* navigation to all elements  */}
            <div className="flex items-center gap-4 md:gap-7">
                <nav className="flex gap-4 md:gap-6 text-base md:text-lg">
                    <Link to={"/"}>Home</Link>
                    <Link to={"/orders"}>Orders</Link>
                    <Link to={"/food"}>Food</Link>
                    <Link to={"/contact"}>Contact</Link>
                </nav>
                <div className="text-xl hover:text-red-600 cursor-pointer relative">
                    <RiShoppingCart2Fill />
                    <div className="absolute -top-2 -right-1 text-white bg-red-400 h-4 m-0 p-0 text-sm text-center w-4 rounded-full ">
                        0
                    </div>
                </div>
                    
                <div className='text-slate-500' onClick={handleShowMenu}>
                    <div className="text-xl teaxt hover:text-orange-400 cursor-pointer" >
                        <FaUserLarge/>
                    </div>
                    {/* dropdown elements  */}
                    {/* Login and Restaurant  */}


                    {showMenu && (
                        
                        <div className='absolute right-2 bg-white mt-5  py-2 px-3  shadow drop-shadow-md flex flex-col'>
                            <Link to={'/admin'} className='whitespace-nowrap cursor-pointer'>Restaurant</Link>
                            {!isAuthenticated ? (
                                <Link to={'/login'} className='whitespace-nowrap cursor-pointer'>Login</Link>

                            ):(<Link to={'/login'} className='whitespace-nowrap cursor-pointer text-white px-3 pb-1 items-center justify-center bg-red-500' onClick={handleLogout} >Logout</Link>

                            )}
 
                        </div>
                        
                    )}


                    {/* ends drop elements  */}
                    
                </div>
                
            </div>
        </div>
        {/* mobile */}
    </nav>
  )
}

export default Navbar