import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './routes/Home.jsx'
import Playing from './routes/Playing.jsx'

const router = createBrowserRouter([
  {
    path:'*',
    element:<Home />
  },
  {
    path:'/play',
    element:<Playing />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
