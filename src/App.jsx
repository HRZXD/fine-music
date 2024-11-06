import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SearchPage from './components/SearchPage/SearchPage.jsx'
import HipHopPage from './components/HipHopPage/HipHopPage.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container">
      <SearchPage />
      <HipHopPage />
    </div>
    
  )
}

export default App