import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from './Pages/Homepage'
import { SnackbarProvider } from 'notistack'

const App = () => {
  return (
    <div>
      <SnackbarProvider>


        <Routes>
          <Route path='/' element={<Homepage />} />
        </Routes>
      </SnackbarProvider>
    </div>
  )
}

export default App
