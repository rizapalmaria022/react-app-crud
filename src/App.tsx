import { Outlet } from 'react-router-dom';
import './App.css'

function App() {
  return (
    <>
      <div className='main-app'>
       <Outlet/>
      </div>
    </>
  )
}

export default App
