import './css/App.css'
import Gifts from './pages/gifts'
import Home from './pages/Home'

import {Routes,Route} from 'react-router-dom'

function App() {
  

  return (
    < div className="app">
   
  
    <Routes>
      <Route  path="/"  element={ <Home/>}/>
       <Route  path="/home"  element={ <Home/>}/>
        <Route  path="/gifts"  element={ <Gifts/>}/>

    </Routes>

   


    </div>
  )
}

export default App
