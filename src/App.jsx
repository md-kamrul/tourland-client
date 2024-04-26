import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'

function App() {

  return (
    <>
      
      {/* hero */}
      <div className='bg-[url("/src/assets/heroBG.jpg")] w-full h-screen'>

        {/* navbar */}
        <Navbar></Navbar>

      </div>

      <Outlet></Outlet>

    </>
  )
}

export default App
