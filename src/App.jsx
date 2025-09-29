
import Header from './components/header'
import { Routes,Route } from 'react-router'

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
