import React from 'react'
import Header from '../../ui/header';
import Footer from '../../ui/footer';
import Hero from '../../components/hero';
import About from '../../components/about';
import MisVIs from '../../components/misvis';
import Services from '../../components/services';
import Stats from '../../components/stats';
import Team from '../../components/team';

const Landing = () => {
  return (
    <main className='flex items-center justify-center flex-col bg-white'>
      <Header />
      <Hero />
      <About />
      <Services />
      <MisVIs />
      <Stats />
      <Team />
      <Footer />
    </main>
  )
}

export default Landing