import React from 'react'
import Layout from '../component/layout/Layout'
import { Box, Typography, Grid, Paper } from '@mui/material'
import boy from '../images/boy.jpg'
import chef2 from "../images/chef2.webp"
import chef3 from "../images/chefR.jpg"
import chef4 from "../images/chef4.jpeg"
import '../style/about.css'

function About() {
  return (
    <Layout>
      <Box sx={{backgroundColor:"#ece0d1"}}>
        <Typography className='aboutTxt' sx={{ fontSize: 50 }} marginBottom={7} paddingBottom={'30px'}>About Us</Typography>
        <Grid container spacing={3} direction={{ xs: 'column', sm: 'row' }}   >
          <Grid item lg={4} xs={12} display="flex" justifyContent="center" >
            <Box padding={{ sm: '5px 5px', md: '5px 5px', xs: '5px 5px' }} component={'img'} src={boy} sx={{ maxWidth: '100%', height: 'auto', objectFit: 'cover' }} marginRight={'10px'} marginLeft={'10px'} marginBottom={'10px'}>

            </Box>

          </Grid>
          <Grid item lg={8} xs={12} >
            <h3 className='mainHeading' >
              We Always Make The Best
            </h3>
            <Typography padding={{ sm: '5px 5px', md: '5px 5px', xs: '5px 5px' }} marginLeft={{ sm: '5px', md: '2px' }}
            >Welcome to [Restaurant Name], where passion for food meets a warm and inviting atmosphere. Established in [Year], our mission is to create memorable dining experiences through fresh, high-quality ingredients and exceptional service. Inspired by [cuisine or theme], our menu features a delightful array of dishes crafted by our talented chefs, who are dedicated to bringing traditional flavors and modern twists to your table. Whether you’re enjoying a casual meal with friends or celebrating a special occasion, we strive to make every visit special. Join us at [Restaurant Name] and discover a culinary journey that delights the senses and nourishes the soul.</Typography>
            <br></br>
            <Typography padding={{ sm: '5px 5px', md: '5px 5px', xs: '5px 5px' }}>our menu features a delightful array of dishes crafted by our talented chefs, who are dedicated to bringing traditional flavors and modern twists to your table. Whether you’re enjoying a casual meal with friends or celebrating a special occasion, we strive to make every visit special. Join us at [Restaurant Name] and discover a culinary journey that delights the senses and nourishes the soul.</Typography>
          </Grid>
        </Grid>

        <Typography className='aboutTxt' sx={{ fontSize: 35, fontWeight: 500 }} marginTop={10} >Our Chef</Typography>
        <Grid container spacing={2}   pb={5}>

          <Grid item lg={3} xs={12} sm={12}  display="flex" justifyContent="center" ml={{ xs: 3, sm: 3 ,lg:15}}  mr={{ xs: 3, sm: 3 }}>
            <Box  component={'img'} src={chef2} sx={{ maxWidth: '100%', height: 'auto', objectFit: 'cover' }}  >
            </Box>
          </Grid>

          <Grid item lg={3} xs={12} sm={12}    display="flex" justifyContent="center" ml={{ xs: 3,  }}  mr={{ xs: 3,  }}  >
            <Box  component={'img'} src={chef3} sx={{ maxWidth: '85%', height: 'auto', objectFit: 'cover', }} >

            </Box>
          </Grid>

          <Grid item lg={3} xs={12} sm={12}   display="flex" justifyContent="center"  ml={{ xs: 3, sm: 3, lg:7}}  mr={{ xs: 3, sm: 3 }}>
            <Box  component={'img'} src={chef4} sx={{ maxWidth: '100%', height: 'auto', objectFit: 'cover' }}>

            </Box>
          </Grid>

          

        </Grid>

      </Box>
    </Layout>
  )
}

export default About
