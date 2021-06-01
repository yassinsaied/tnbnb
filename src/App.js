import React from 'react'
import { HashRouter } from 'react-router-dom'
import Header from './components/Header/Header'
import HomeContainer from './components/HomeContainer/HomeContainer'

import './App.css'

function App() {
  return (
   
    <div
      style={{
        backgroundImage: `url(${
          process.env.PUBLIC_URL + 'img/imageonline-co-darkenimage.jpg'
        }) `,
      
        
    
      }}
      className="site-blocks-cover"
    >

<div className="site-opacity"></div>
      <HashRouter>
        <Header />
        <div className="container main">
          <HomeContainer />
        </div>
      </HashRouter>{' '}
    </div>

  
  )
}

export default App
