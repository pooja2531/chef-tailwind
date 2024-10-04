import React from 'react'
import Layout from '../component/layout/Layout'
import { Box, Typography, TextField, Button, Grid, CardContent, Card } from '@mui/material'
import pizza from "../images/pizza.jpg"
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import SettingsIcon from '@mui/icons-material/Settings';
import '../style/help.css'

function Help() {
  return (
    <Layout>
      <div className='help' style={{backgroundImage:`url(${pizza})`,position:'relative'}} width={{sm:'100vw'}}>
        <Typography sx={
          {
            zIndex: 3, position: 'relative', textAlign: 'center', fontWeight: '600', pt: 10
          }
        } variant='h4'>How Can We Help</Typography>
        <Typography sx={
          {
            fontSize: { xs: '13px', sm: '13px', md: '18px' }, zIndex: 3, position: 'relative', textAlign: 'center'
          }
        }>Find answer from our support team or get in touch</Typography>

        <input
          placeholder='search'
          style={{
            position: 'relative',
            zIndex: 3,
            width: '100%', // Ensures full width relative to its container
            maxWidth: '450px', // Maximum width at larger screen sizes
            height: '45px', // Default height
            padding: '1rem',
            display: 'block',
            margin: '25px auto',
            borderRadius: '20px',
            border: 'none',
            outline: 'none',
            
          }}
          className='searchBar'
          // width={{sm:'250px' , md:'350px', lg:'550px'}}
          // height={{sm:'30px' , md:'45px' , lg:'55px'}}
        />

        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: ' #ece0d1',
            opacity: '75%',
            zIndex: 1,
          }}
        />
      </div>


      <Typography sx={
        {
          fontSize: {  sm: '15px', md: '30px' }, zIndex: 3, position: 'relative', textAlign: 'center', fontWeight: '600', pt: { xs: '20px', sm: '25px', md: '30px' }
        }
      }>Browse All Topices</Typography>



      <Grid container spacing={2} sx={{mb:10, mt:3, pl:5, pr:5}}   >
        <Grid item xs={12} sm={12} md={4} display="flex" justifyContent="center" >
          <Card sx={{ width: 300 }}>
            <CardContent sx={{display:'flex' , flexDirection:'column' , alignItems:'center' , gap:1}}>
              <PlaylistAddIcon sx={{ textAlign: 'center', fontSize:45 }}></PlaylistAddIcon>
              <Typography variant='h6'>Getting Started</Typography>
              <Typography>You're referring to a regular HTML element, you can remove the border by setting the border property to none in CSS.</Typography>

            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={12} md={4} display="flex" justifyContent="center">
          <Card sx={{ width: 300 }}>
            <CardContent sx={{display:'flex' , flexDirection:'column' , alignItems:'center' , gap:1}}>
              <CreditCardIcon sx={{ textAlign: 'center', fontSize:40 }}></CreditCardIcon>
              <Typography variant='h6'>Account And Billing</Typography>
              <Typography>You're referring to a regular HTML element, you can remove the border by setting the border property to none in CSS.</Typography>

            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={12} md={4} display="flex" justifyContent="center">
          <Card sx={{ width: 300 }}>
            <CardContent sx={{display:'flex' , flexDirection:'column' , alignItems:'center' , gap:1}}>
              <SettingsIcon sx={{ textAlign: 'center', fontSize:45 }}></SettingsIcon>
              <Typography variant='h6'>Setting</Typography>
              <Typography>You're referring to a regular HTML element, you can remove the border by setting the border property to none in CSS.</Typography>

            </CardContent>
          </Card>
        </Grid>
      </Grid>

    </Layout>
  )
}

export default Help
