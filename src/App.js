import './App.css'
import { NavBar } from './components/NavBar.js'
import { Home } from './pages/Home.js'
import { About } from './pages/About.js'
import { Connect } from './pages/Connect.js'
import { TheBook } from './pages/TheBook.js'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/connect" element={<Connect />} />
        <Route path="/book" element={<TheBook />} />
      </Routes>
    </div>
  )
}

export default App
