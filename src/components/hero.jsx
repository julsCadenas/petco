import React from 'react';

const Hero = () => {
  const text = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam, sint similique!";
  
  return (
    <main className='flex items-center justify-center p-20 pl-10 w-full bg-bgpurple'>
      <section className='font-poppins font-extrabold pl-5 md:pl-0 text-5xl md:text-8xl lg:text-9xl text-purple2 cursor-default'>
        {text.split("").map((char, index) => (
          <span key={index} className="hover:text-purple3 transition-colors duration-200">{char}</span>
        ))}
      </section>
    </main>
  );
}

export default Hero;
