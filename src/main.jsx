import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route,RouterProvider,createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/home.jsx'
import Contact from './components/Contact/contact.jsx'
import About from './components/About/about.jsx'
import User from './components/User/User.jsx'
import Github, { GitInfoLoader } from './components/Github/Github.jsx'

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
    <Route path='' element={<Home/>} />
    <Route path='contact' element={<Contact/>} />
    <Route path='About' element={<About/>} />
    <Route path='User/:userid' element={<User/>} />
    <Route loader={GitInfoLoader} 
    path='Github' 
    element={<Github/>} />
    
    </Route>
    
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
