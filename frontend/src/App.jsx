import { Button, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { useState } from 'react'
import { Route ,Routes} from 'react-router-dom'
import HomePage from './pages/HomePage'
import Navbar from './components/Navbar'
import CreatePage from './pages/CreatePage'
import { Box } from '@chakra-ui/react'

function App() {
  return (
    <Box minH={"100vh"} bg={useColorModeValue("gray.100","gray.900")}>
      {/* Navbar */}
      <Navbar/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/create' element={<CreatePage/>}/>
      </Routes>
    </Box>
  )
}

export default App
