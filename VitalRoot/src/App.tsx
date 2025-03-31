import { useState } from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import './App.css'
import NavBar from './component/NavBar'


function App() {

  return (
   <>

    <Router>
      <NavBar/>
      <Routes>
        <Route path='/' element={}></Route>
        <Route path='/AI' element={}></Route>
        <Route path='/graphs' element={}></Route>
      </Routes>
    </Router>

   
   </>
  )
}

export default App
