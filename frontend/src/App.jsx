import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './pages/homePage';
import Login from './pages/login';


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login/>}>
          {/* <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </>
  )
}

export default App
