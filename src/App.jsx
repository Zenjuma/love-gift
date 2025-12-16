import './css/App.css'
import Home from './pages/Home'
import BrokenHeartPage from './pages/HeartBreak'
import { Routes, Route } from 'react-router-dom'
import Gifts from './pages/gifts'
import JarContents from './pages/Jarcontents'

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/gifts" element={<Gifts/>} />
          <Route path="/jarcontents" element={<JarContents />} />
        <Route path="/heartbreak" element={<BrokenHeartPage />} />
      </Routes>
    </div>
  )
}

export default App
