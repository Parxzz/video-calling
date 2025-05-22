"use client"
import React from 'react'
import { BrowserRouter, Routes, Route  } from 'react-router-dom'
import Home from '../components/Home'
import VideoComp from '../Components/VideoComp'

const page = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/room/:roomID" element={<VideoComp />} />
      </Routes>
    </BrowserRouter>
  )
}

export default page