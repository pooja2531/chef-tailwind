import { React, useState } from 'react'
import { Box, AppBar, Toolbar, Typography, IconButton, Drawer, Divider } from "@mui/material"
import FastfoodIcon from '@mui/icons-material/Fastfood';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';


const Header = () => {
  const [mobileNav, setMobileNav] = useState(false)
  const handlenav = () => {
    setMobileNav(!mobileNav)
  }
  const drawer = (
    <Box onclick={handlenav} sx={{ textAlign: 'center' }}>
      <Typography
        variant='h6'
        component={'div'}
        color='black'
        sx={{ flexFlow: 1 }}
      >
        <FastfoodIcon ></FastfoodIcon>Food Court
      </Typography>
      <Divider />
      <ul style={{ listStyle: 'none', margin: 10, padding: 0 }} >
        <li style={{ marginTop: 30 }} >
          <Link to={"/"} style={{ textDecoration: 'none', color: 'black', fontSize: 20 }} >Home</Link>
        </li>
        <li style={{ marginTop: 10 }}>
          <Link to={"/about"} style={{ textDecoration: 'none', color: 'black', fontSize: 20 }}>About</Link>
        </li>
        <li style={{ marginTop: 10 }}>
          <Link to={"/help"} style={{ textDecoration: 'none', color: 'black', fontSize: 20 }}>Help</Link>
        </li>
        <li style={{ marginTop: 10 }}>
          <Link to={"/contact"} style={{ textDecoration: 'none', color: 'black', fontSize: 20 }}>Conatct</Link>
        </li>
        <li style={{ marginTop: 10 }}>
          <Link to={"/menu"} style={{ textDecoration: 'none', color: 'black', fontSize: 20 }}>Menu</Link>
        </li>
        <li style={{ marginTop: 10 }}>
          <Link to={"/signup"} style={{ textDecoration: 'none', color: 'black', fontSize: 20 }}>Sign Up</Link>
        </li>
      </ul>

    </Box>
  )
  return (
    <>
      <Box >
        <AppBar sx={{ bgcolor: "#dbc1ac" }}>
          <Toolbar sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }} >
            <IconButton edge='start' sx={{ display: { sm: 'none' } }} aria-label='open drawer' onClick={handlenav}><MenuIcon></MenuIcon></IconButton>
            <Typography
              variant='h6'
              component={'div'}
              color='black'
              sx={{ flexFlow: 1 }}
            >
              <FastfoodIcon ></FastfoodIcon>Food Court
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', display: { xs: 'none', sm: 'block' } }}>
              <ul style={{ display: 'flex', listStyle: 'none', margin: 0, padding: 0, gap: 20 }} >
                <li >
                  <Link to={"/"} style={{ textDecoration: 'none', color: 'black', fontSize: 20 }} >Home</Link>
                </li>
                <li>
                  <Link to={"/about"} style={{ textDecoration: 'none', color: 'black', fontSize: 20 }}>About</Link>
                </li>
                <li>
                  <Link to={"/help"} style={{ textDecoration: 'none', color: 'black', fontSize: 20 }}>Help</Link>
                </li>
                <li>
                  <Link to={"/contact"} style={{ textDecoration: 'none', color: 'black', fontSize: 20 }}>Conatct</Link>
                </li>
                <li>
                  <Link to={"/menu"} style={{ textDecoration: 'none', color: 'black', fontSize: 20 }}>Menu</Link>
                </li>
                <li>
                  <Link to={"/signup"} style={{ textDecoration: 'none', color: 'black', fontSize: 20 }}>Sign Up</Link>
                </li>
              </ul>
            </Box>
          </Toolbar>
        </AppBar>
        <Box component={'nav'}>
          <Drawer variant='temporary' open={mobileNav} onClick={handlenav} sx={{ display: { xs: 'block', sm: 'none', "& .MuiDrawer-paper": { boxSizing: 'border-box', width: '200px' } } }}>
            {drawer}
          </Drawer>
        </Box>
      </Box>
      <Toolbar></Toolbar>
    </>
  )
}

export default Header
