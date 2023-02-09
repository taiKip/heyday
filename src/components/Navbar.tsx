import { AppBar, Toolbar, Typography } from '@mui/material'
import React from 'react'

const Navbar = () => {
  return (
      <AppBar component="nav">
          <Toolbar>
              <Typography variant='h6' component="div" sx={{
                  flexGrow:1
              }}>MUI</Typography>
          </Toolbar>
    </AppBar>
  )
}

export default Navbar