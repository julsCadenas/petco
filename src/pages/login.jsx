import React from 'react'
import signuppic from '../assets/signuppic.png';
import { Link } from 'react-router-dom';  

const Login = () => {
  const text = "Noot Note";
  const colors = ['#67c1ac', '#e8bf62', '#e0696d'];


  return (
    <main className='font-poppins flex flex-wrap gap-5 items-center justify-center h-screen '>
      
      <figure className='hidden md:flex'>
        <img src={signuppic} alt="sign up" className='rounded-xl w-[400px] ' />
      </figure>

      <div className='flex flex-col'>

      <section className='flex justify-between items-center pb-10'>
        <aside>
          <Link to='/landing' className='bg-blue2 rounded-full text-white2 flex items-center'>
            <span className="material-symbols-outlined">
              chevron_left
            </span>
          </Link>
        </aside>

        <aside className='flex items-center gap-3 text-xs md:text-sm'>
          <p>Already have an account?</p>
          <span>
            <button className='border border-blue2 hover:bg-blue2 hover:text-white2 transition-colors rounded-full px-3 py-1'>Sign in</button>
          </span>
        </aside>
      </section>


        <section className=''>

          <section className=''>

            <div className='flex font-bold text-2xl md:text-4xl'>
              <p className='pr-2'>Welcome to</p>
              {text.split("").map((char, index) => (
                <span 
                  key={index} 
                  style={{ 
                    color: colors[index % colors.length], 
                  }}
                >
                  {char}
                </span>
              ))}
              <span>!</span>
            </div>

            <p className='text-gray-400'>Register your account</p>

          </section>


        </section>

        <section className='flex flex-col space-y-5 pt-5'>
          <section>
            <div>
              <p>Name</p>
              <input required type="text" placeholder='Full Name' className='mb-3 text-gray-400 text-sm pl-3 focus:outline-none focus:text-blue2 focus:border-blue2 hover:border-blue2 hover:text-blue2  transition-all border border-black rounded-md w-[400px] h-9' />
            </div>
            <div>
              <p>Email</p>
              <input required type="email" placeholder='example@email.com' className='mb-3 text-gray-400 text-sm pl-3 focus:outline-none focus:text-blue2 focus:border-blue2 hover:border-blue2 hover:text-blue2  transition-all border border-black rounded-md w-[400px] h-9' />
            </div>
            <div>
              <p>Name</p>
              <input required type="password" placeholder='8+ characters' className='mb-3 text-gray-400 text-sm pl-3 focus:outline-none focus:text-blue2 focus:border-blue2 hover:border-blue2 hover:text-blue2  transition-all border border-black rounded-md w-[400px] h-9' />
            </div>
          </section>
          <div className='flex justify-center -ml-5'>
            <button className='bg-blue2 w-36 h-10 rounded-full text-white2' >Sign Up</button>
          </div>
          <div className='text-xs flex gap-2'>
            <input type="checkbox" className='border-blue2' required/>
            <p>I have read and accept the <strong className='text-yellow2'>Terms of Service</strong> & <strong className='text-red2'>Privacy Policy</strong></p>
          </div>
        </section>

      </div>


    </main>
  )
}

export default Login