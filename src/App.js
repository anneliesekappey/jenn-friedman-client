import './App.css'
import { NavBar } from './components/NavBar.js'
import { Home } from './pages/Home.js'
import { AboutTheAuthor } from './pages/AboutTheAuthor.js'
import { Contact } from './pages/Contact.js'
import { AboutTheBook } from './pages/AboutTheBook.js'
import { Routes, Route } from 'react-router-dom'
import { Blog } from './pages/Blog'

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element=<Home /> />
        <Route path="/abouttheauthor" element=<AboutTheAuthor /> />
        <Route path="/contact" element=<Contact /> />
        <Route path="/aboutthebook" element=<AboutTheBook /> />
        <Route path="/blog" element=<Blog /> />
      </Routes>
    </div>
  )
}

export default App
