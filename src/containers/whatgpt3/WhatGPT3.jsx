import React from 'react'
import {Feature} from '../../components/feature/Feature'
import './whatgpt3.css'
const WhatGPT3 = () => {
  return (
    <div className="gpt3__whatgpt3 section__padding" id="whpt3">
      <div className="gpt3__whatgpt3-features">
       <Feature/>
      </div>
      <div className="gpt3__whatgpt3-heading">
       <h1 className="gradien-text">
        The possibilities are beyond Your Imagination
       </h1>
       <p>
        Explore the library
       </p>
      </div>
    <div className="gpt3__whatgpt3-container">
     <Feature/>
    </div>
    </div>
  )
}

export default WhatGPT3
