import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import { AuthProvider } from './Auth/AuthProvider.jsx'
import { Toaster } from 'react-hot-toast'
import Router from './Router/Router.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <AuthProvider>
        <RouterProvider router={Router}/>
      </AuthProvider>
      <Toaster />
  </StrictMode>,
)
