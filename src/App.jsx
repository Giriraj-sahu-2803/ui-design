import { useState } from 'react'
import './App.css'
import { Article,CTA,Brand,Feature,Navbar } from '../src/components'
import {Blog,Features,Footer,Header,Possibility,WhatGPT3} from '../src/containers'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar/>
        <Header/>
      </div>
       <Brand/>
       <WhatGPT3/>
       <Features/>
       <Possibility/>
       <CTA/>
       <Blog/>
       <Footer/>
    </div>
  )
}

export default App
