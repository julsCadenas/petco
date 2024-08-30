import React from 'react';
import './styles/App.css';
import Header from './ui/header';
import Hero from './components/hero';
import About from './components/about';
import Services from './components/services';
import MisVIs from './components/misvis';

function App() {

  return (
    <main className='flex items-center justify-center flex-col bg-white2'>
      <Header />
      <Hero />
      <About />
      <Services />
      <MisVIs />
    </main>
  )
}

export default App
