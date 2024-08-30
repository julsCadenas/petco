import React from 'react';
import './styles/App.css';
import Header from './ui/header';
import Hero from './components/hero';
import About from './components/about';

function App() {

  return (
    <main className='flex items-center justify-center flex-col bg-white2'>
      <Header />
      <Hero />
      {/* <About /> */}
    </main>
  )
}

export default App
