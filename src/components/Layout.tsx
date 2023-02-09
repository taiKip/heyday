import { Toolbar } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'

const Layout = () => {
  return (
      <>
          <Navbar/>
          <Container component="main">
              <Toolbar/>
              <Outlet/>
          </Container>
      </>
  )
}

export default Layout