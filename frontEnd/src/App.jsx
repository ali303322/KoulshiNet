// import { useState } from 'react'
// import './App.css'
import { RouterProvider } from 'react-router-dom';
import { Router } from './Routes/index';
function App() {

  return (
    <>
        <RouterProvider router={Router}/>
    </>
  )
}

export default App
