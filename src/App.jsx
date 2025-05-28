import { useState } from 'react'
import Cursor from './components/Molecules/Cursor'
import Aside from './components/Organismus/Aside'
import MainPage from './pages/MainPage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  const [hovered, setHovered] = useState(false)

  return (
    <Router>
      <div className="flex h-screen">
        <Aside setHovered={setHovered} />
        <main
          className="flex-1 overflow-y-auto [&::-webkit-scrollbar]:w-2
                   [&::-webkit-scrollbar-track]:bg-colorBlack
                   [&::-webkit-scrollbar-thumb]:bg-zinc-800
                     [&::-webkit-scrollbar-thumb]:rounded-full
                     [scrollbar-width]:thin
                     [scrollbar-color]:colorPrimary_colorMenu"
        >
          <Routes>
            <Route path="/" element={<MainPage setHovered={setHovered} />} />
          </Routes>
        </main>
        <Cursor hovered={hovered} />
      </div>
    </Router>
  )
}

export default App
