import {BrowserRouter,Route,Routes} from 'react-router-dom'
import React from "react"
import  Home from './components/Home'
import About from './components/About'
import Header from './components/Header'


function App() {
  return(
    <>
<BrowserRouter>
<Header/>
  <Routes>
   <Route exact path="/" element={<Home/>}/>
   <Route exact path="/about" element={<About/>}/>
   </Routes>
</BrowserRouter>
</>
  )
}

export default App;
