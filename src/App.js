import React from 'react'
import Brand from './components/brand/Brand'
import CTA from './components/cta/CTA'
import Feature from './components/feature/Feature'
import Navbar from './components/navbar/Navbar'
import Blog from './containers/blog/Blog'
import Footer from './containers/footer/Footer'
import Header from './containers/header/Header'
import Possibility from './containers/possibility/Possibility'
import WhatGPT3 from './containers/WhatGPT3/WhatGPT3'
import './App.css';

const App = () => {
  return (
    <div className='App'>
        <div className="gradient__bg">
            <Navbar/>
            <Header/>
        </div>
        <Brand/>
        <WhatGPT3/>
        <Feature/>
        <Possibility/>
        <CTA/>
        <Blog/>
        <Footer/>
    </div>
  )
}

export default App