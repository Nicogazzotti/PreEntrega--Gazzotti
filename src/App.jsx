/* eslint-disable react/prop-types */
import './App.css'
import NavBar from './components/NavBar/NavBar'
import { Route,Routes } from 'react-router-dom'
import Home from './pages/home'
import Detail from './pages/detail'



function App() {

  return (
    <>
      <div>
        {/* <NavBar logo="TecnoGlaz"/> */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products/:prodId' element={<Detail/>}/>
          <Route path='/category/:catId' element={<Home/>}  />
        </Routes>

      </div>
    </>

  )
}

export default App




