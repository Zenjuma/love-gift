import './css/App.css'
import Home from './pages/Home'
import Gifts from './pages/gifts'
import BrokenHeartPage from './pages/HeartBreak'

import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/gifts" element={<Gifts />} />
        <Route path="/heartbreak" element={<BrokenHeartPage />} />
      </Routes>
    </div>
  )
}

export default App
