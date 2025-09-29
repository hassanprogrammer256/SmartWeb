
import './App.css'
import { Typography } from '@mui/material'
import Header from './components/header'
import { Routes,Route } from 'react-router'
import Home from './pages/Home'
import About from './pages/About'
import Index from './pages'


function App() {
 
  return (
    <>
<Header />
  <Routes>
  <Route path='/' element={<Index />}/>
  <Route path='#about' element={<About />}/>
</Routes>

</>

  )
}

export default App
