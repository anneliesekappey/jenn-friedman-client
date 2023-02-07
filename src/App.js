import './App.css'
import { NavBar } from './components/NavBar.js'
import { Home } from './pages/Home'

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Home />
    </div>
  )
}

export default App
