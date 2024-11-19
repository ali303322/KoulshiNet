// import { useState } from 'react'
// import './App.css'
import { RouterProvider } from 'react-router-dom';
import { Router } from './Routes/index';
function App() {

  return (
    <>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" rel="stylesheet" />

        <RouterProvider router={Router}/>
    </>
  )
}

export default App
