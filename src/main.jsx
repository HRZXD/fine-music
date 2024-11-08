import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider, } from 'react-router-dom'
import Search from './components/SearchPage/SearchPage.jsx'
import HipHop from './components/HipHopPage/HipHopPage.jsx'
import Jazz from './components/JazzPage/JazzPage.jsx'
import Metal from './components/MetalPage/MetalPage.jsx'
import PopMusic from './components/PopPage/PopPage.jsx'

const router = createBrowserRouter([
  {
    path:"/",
    element: <Search />
  },
  {
    path:"HipHopPage",
    element: <HipHop />
  },
  {
    path:"JazzPage",
    element: <Jazz />
  },
  {
    path:"MetalPage",
    element: <Metal />
  },
  {
    path:"PopPage",
    element: <PopMusic />
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
