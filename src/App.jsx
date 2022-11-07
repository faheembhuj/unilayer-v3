import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './Components/Header'
import Home from './Screens/Home'
import Footer from './Components/Footer'
import './App.css'

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    {/* <Route path="/about" element={<About />} /> */}
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    )
}

export default App
