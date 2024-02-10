"use client"

import React from 'react'
import Navbar from '@/Components/Navbar'
import Home from '@/Pages/Homepage'
import Card from '@/Components/Card'

const page = () => {
  return (
    <div>
      <Navbar/> 
      <Home/>
      <Card/>
    </div>
  )
}

export default page
