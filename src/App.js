import React from 'react';

import { About, Services, Projects, Footer } from './containers'
import { Navbar } from './components';

import './App.scss'

const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <About />
      <Services />
      <Projects />
      <Footer />
    </div>
  )
}

export default App