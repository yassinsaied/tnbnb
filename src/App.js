import React from 'react'
import { HashRouter } from 'react-router-dom'
import Header from './components/Header/Header'
import Cover from './components/Cover/Cover'

import './App.css'

function App() {
  return (
    <>
      <HashRouter>
        <Header />
        <Cover/>
      </HashRouter>
    </>
  )
}

export default App
