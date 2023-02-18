import './App.css'
import { NavBar } from './components/NavBar.js'
import { Home } from './pages/Home.js'
import { AboutTheAuthor } from './pages/AboutTheAuthor.js'
import { Contact } from './pages/Contact.js'
import { AboutTheBook } from './pages/AboutTheBook.js'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/abouttheauthor" element={<AboutTheAuthor />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/aboutthebook" element={<AboutTheBook />} />
      </Routes>
    </div>
  )
}

export default App
