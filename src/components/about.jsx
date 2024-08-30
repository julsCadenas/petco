import React from 'react'

const About = () => {

    const lorem = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi magni distinctio quod maxime ducimus ipsa corporis quos impedit repudiandae minus fugiat corrupti atque, magnam minima quis nesciunt culpa cum veniam!"

  return (
    <main className='bg-white2 w-full min-h-screen pt-40 flex flex-col space-y-5 items-center'>
        <section className='flex flex-col space-y-3'>
            <p className='text-green2 text-5xl font-bold'>What is CryptPaw?</p>
        </section>
        <section className='flex flex-wrap text-purple2 gap-2'>
            <aside className='max-w-xl w-full '>{lorem}</aside>
        </section>
    </main>
  )
}

export default About;