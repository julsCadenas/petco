import React, { useState } from 'react'

const Header = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);   

    const toggleSidebar = () => {   
        setIsSidebarOpen(!isSidebarOpen);
    };

  return (
    <header className='fixed top-0 font-poppins bg-white2 text-purple3 flex items-center justify-around h-16 w-full' >
        
        {/* pc navbar */}
        <h1 className='font-bold text-xl md:text-3xl transition-all cursor-pointer'>NootNote</h1>    
        <nav className='hidden lg:flex'>
            <ul className='flex gap-5 font-medium'>
                <li>
                    <button className=' transition-all'>Home</button>
                </li>
                <li>
                    <button className=' transition-all'>Dashboard</button>
                </li>
                <li>
                    <button className=' transition-all'>Courses</button>
                </li>
                <li>
                </li>
            </ul>
            <button className=' transition-all'>Hello, <strong>Jansen</strong></button>
        </nav>
        {/* sidebar toggle */}
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
                    className={`fixed top-0 right-0 h-screen w-full bg-white2 transform pt-2 px-10 ${
                        isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
                    } transition-transform duration-150 ease-in-out md:hidden`}
                >
                    <div className="flex flex-col h-full">
                        <div className="flex justify-between items-center p-3">
                            <h1 className="font-bold text-xl md:text-3xl transition-all cursor-pointer'">
                                NootNote
                            </h1>
                            <button onClick={toggleSidebar} className="text-black focus:outline-none transition-colors px-3">
                                <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                                </svg>
                            </button>
                        </div>
                        <ul className="flex flex-col p-4 space-y-4 text-lg">
                            <li className="cursor-pointer transition-colors" onClick={toggleSidebar}>
                                <button>Home</button>
                            </li>

                        </ul>
                    </div>
                </div>

    </header>
  )
}

export default Header;