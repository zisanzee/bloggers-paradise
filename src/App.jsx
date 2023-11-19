import { useState } from 'react'
import Header from './components/Header'
import './App.css'
import Blogs from './components/Blogs'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <Blogs/>
      
    </>
  )
}

export default App
