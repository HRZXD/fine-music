import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SearchPage from './components/SearchPage/SearchPage.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container">
      <SearchPage />
    </div>
  )
}

export default App