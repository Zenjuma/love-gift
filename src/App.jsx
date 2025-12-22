import './css/App.css'
import Home from './pages/Home'
import BrokenHeartPage from './pages/HeartBreak'
import { Routes, Route } from 'react-router-dom'
import Msg from './pages/Msg'
import JarContents from './pages/Jarcontents'
import Gifts from './pages/Gifts'
import { Youtube } from './pages/Youtube'

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/message" element={<Msg/>} />
        <Route path="/gifts" element={<Gifts/>} />
        <Route path="/video" element={<Youtube/>} />
          <Route path="/jarcontents" element={<JarContents />} />
        <Route path="/heartbreak" element={<BrokenHeartPage />} />
       
      </Routes>
    </div>
  )
}

export default App
