import React from 'react';

import { About, Services, Projects, Testimonials, Footer } from './containers';
import { Navbar, Banner } from './components';

import './App.scss'

const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <About />
      <Services />
      <Projects />
      <Testimonials />
      <Banner />
      <Footer />
    </div>
  )
}

export default App