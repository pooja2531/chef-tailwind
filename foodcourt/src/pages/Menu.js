import React from 'react'
import Layout from '../component/layout/Layout'
import { Box, Grid, Card, CardActions, CardContent, CardMedia, Typography, Button } from '@mui/material'
import img1 from "../images/chhola.jpg"
import img2 from "../images/dosa.jpg"
import img3 from "../images/paneer.jpg"
import img4 from "../images/gujrati.jpeg"
import img5 from "../images/idli.jpg"
import img6 from "../images/masala.jpg"




function Menu() {
  return (
    <Layout>
      <div style={{backgroundColor:"#ece0d1"}}>
        <Box sx={{ display: "flex", justifyContent: 'center', alignItems: 'center', flexDirection: 'column', p: 6, gap: 1 }}>
          <h1 style={{ textAlign: 'center' }}>Discover Our Menu</h1>
          <Box >
            <div style={{ height: 3, width: 100, backgroundColor: "black" }}></div>
          </Box>
        </Box>

        <Grid container sx={{ margin: '0 auto', pb: 10,  }} spacing={3} width={{ lg: '70%', sm: "95%" }}  >
          <Grid item lg={4} xs={12} sm={6} display="flex" justifyContent="center">
            <Box height='200' width='350px'>
              <Card sx={{ width: 280 }}>
                <CardMedia
                  component={"img"}
                  src={img1}
                  sx={{
                    width: 200,
                    height: 200,
                    borderRadius: '50%',
                    objectFit: 'cover',
                    margin: '0 auto',
                    paddingTop: '6px'
                  }}
                ></CardMedia>
                <CardContent>
                  <Typography variant='h6'>Chola</Typography>
                  <Typography variant='body' sx={{ fontSize: 15 }}>Chole Masala is a popular Punjabi dish where chickpeas are simmered in a spicy & tangy gravy. </Typography>
                </CardContent>

                <CardActions>
                  <Button>Order Now</Button>
                </CardActions>
              </Card>
            </Box>
          </Grid>

          <Grid item lg={4} xs={12} sm={6} display="flex" justifyContent="center">
            <Box height='200' width='350px'>
              <Card sx={{ width: 280 }}>
                <CardMedia
                  component={"img"}
                  src={img2}
                  sx={{
                    width: 200,
                    height: 200,
                    borderRadius: '50%',
                    objectFit: 'cover',
                    margin: '0 auto',
                    paddingTop: '6px'
                  }}
                ></CardMedia>
                <CardContent>
                  <Typography variant='h5'>Dosa</Typography>
                  <Typography variant='body'>Chole Masala is a popular Punjabi dish where chickpeas are simmered in a spicy & tangy gravy. </Typography>
                </CardContent>

                <CardActions>
                  <Button>Order Now</Button>
                </CardActions>
              </Card>
            </Box>
          </Grid>

          <Grid item lg={4} xs={12} sm={6} display="flex" justifyContent="center">
            <Box height='200' width='350px'>
              <Card sx={{ width: 280 }}>
                <CardMedia
                  component={"img"}
                  src={img3}
                  sx={{
                    width: 200,
                    height: 200,
                    borderRadius: '50%',
                    objectFit: 'cover',
                    margin: '0 auto',
                    paddingTop: '6px'
                  }}
                ></CardMedia>
                <CardContent>
                  <Typography variant='h5'>Panner</Typography>
                  <Typography variant='body'>Chole Masala is a popular Punjabi dish where chickpeas are simmered in a spicy & tangy gravy. </Typography>
                </CardContent>

                <CardActions>
                  <Button>Order Now</Button>
                </CardActions>
              </Card>
            </Box>
          </Grid>

          <Grid item lg={4} xs={12} sm={6} display="flex" justifyContent="center">
            <Box height='200' width='350px'>
              <Card sx={{ width: 280 }}>
                <CardMedia
                  component={"img"}
                  src={img4}
                  sx={{
                    width: 200,
                    height: 200,
                    borderRadius: '50%',
                    objectFit: 'cover',
                    margin: '0 auto',
                    paddingTop: '6px'
                  }}
                ></CardMedia>
                <CardContent>
                  <Typography variant='h5'>Thali</Typography>
                  <Typography variant='body'>Chole Masala is a popular Punjabi dish where chickpeas are simmered in a spicy & tangy gravy. </Typography>
                </CardContent>

                <CardActions>
                  <Button>Order Now</Button>
                </CardActions>
              </Card>
            </Box>
          </Grid>

          <Grid item lg={4} xs={12} sm={6} display="flex" justifyContent="center">
            <Box height='200' width='350px'>
              <Card sx={{ width: 280 }}>
                <CardMedia
                  component={"img"}
                  src={img5}
                  sx={{
                    width: 200,
                    height: 200,
                    borderRadius: '50%',
                    objectFit: 'cover',
                    margin: '0 auto',
                    paddingTop: '6px'
                  }}
                ></CardMedia>
                <CardContent>
                  <Typography variant='h5'>Idli</Typography>
                  <Typography variant='body'>Chole Masala is a popular Punjabi dish where chickpeas are simmered in a spicy & tangy gravy. </Typography>
                </CardContent>

                <CardActions>
                  <Button>Order Now</Button>
                </CardActions>
              </Card>
            </Box>
          </Grid>

          <Grid item lg={4} xs={12} sm={6} display="flex" justifyContent="center">
            <Box height='200' width='350px'>
              <Card sx={{ width: 280 }}>
                <CardMedia
                  component={"img"}
                  src={img6}
                  sx={{
                    width: 200,
                    height: 200,
                    borderRadius: '50%',
                    objectFit: 'cover',
                    margin: '0 auto',
                    paddingTop: '6px'
                  }}
                ></CardMedia>
                <CardContent>
                  <Typography variant='h5'>Uttapam</Typography>
                  <Typography variant='body'>Chole Masala is a popular Punjabi dish where chickpeas are simmered in a spicy & tangy gravy. </Typography>
                </CardContent>

                <CardActions >
                  <Button>Order Now</Button>
                </CardActions>
              </Card>
            </Box>
          </Grid>
        </Grid>
      </div>

    </Layout>
  )
}

export default Menu
