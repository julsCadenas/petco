import React, { useState } from 'react'

const Header = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

  return (
    <header className='font-poppins bg-bgpurple text-purple3 flex items-center justify-around h-14 w-5/6 lg:w-3/4 border-2 border-green2 m-5 rounded-full' >

        {/* pc navbar */}
        <h1 className='font-bold text-xl md:text-2xl hover:text-purple2 transition-all cursor-pointer'>CryptPaw Academy</h1>    
        <nav className='hidden lg:flex'>
            <ul className='flex gap-5 font-medium'>
                <li>
                    <button className='hover:text-purple2 transition-all'>Home</button>
                </li>
                <li>
                    <button className='hover:text-purple2 transition-all'>Dashboard</button>
                </li>
                <li>
                    <button className='hover:text-purple2 transition-all'>Courses</button>
                </li>
                <li>
                    <button className='hover:text-purple2 transition-all'>Hello, <strong>Jansen</strong></button>
                </li>
            </ul>
        </nav>
        <p
            className="block lg:hidden text-customWhite focus:outline-none hover:text-customGray transition-all"
            onClick={toggleSidebar}
        >
            <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
        </p>


        {/* mobile sidebar */}
        <div
                className={`fixed top-0 h-64 m-5 border-2 border-green2 w-5/6 bg-bgpurple rounded-2xl md:px-28 transform ${
                    isSidebarOpen ? 'translate-y-[-1000px]' : 'translate-y-0'
                } transition-transform duration-150 ease-in-out text-customWhite lg:hidden bg-opacity-90 backdrop-filter backdrop-blur-lg`}
            >
                <div className="flex flex-col h-full">
                    <div className="flex justify-between items-center p-3">
                        <h1 className="font-bold text-xl md:text-2xl hover:text-purple2 transition-all cursor-pointer" onClick={(e) => scrollToSection('juls', e, 0)}>
                            CryptPaw Academy
                        </h1>
                        <p onClick={toggleSidebar} className="text-customWhite focus:outline-none hover:text-customGray transition-colors px-3">
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </p>
                    </div>
                    <ul className="flex flex-col p-4 font-medium space-y-4 text-lg">
                        <li className="cursor-pointer hover:text-customGray transition-colors" onClick={toggleSidebar}>
                            <button>Home</button>
                        </li>
                        <li className="cursor-pointer hover:text-customGray transition-colors" onClick={toggleSidebar}>
                            <button>Dashboard</button>
                        </li>
                        <li className="cursor-pointer hover:text-customGray transition-colors" onClick={toggleSidebar}>
                            <button>Hello, <strong>Jansen</strong></button>
                        </li>
                    </ul>
                </div>
            </div>

    </header>
  )
}

export default Header;