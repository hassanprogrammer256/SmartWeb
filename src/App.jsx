
import Header from './components/header'
import { Routes,Route } from 'react-router'

import About from './pages/About'
import Index from './pages'
import Projects from './pages/projects'
import Home from './pages/Home'


function App() {
 
  return (
    <>
<Header />
  <Routes>
  <Route path='/' element={<Index />}/>
  <Route path='#home' element={<Home />}/>
  <Route path='#about' element={<About />}/>
  <Route path='#projects' element={<Projects />}/>
</Routes>

</>

  )
}

export default App
