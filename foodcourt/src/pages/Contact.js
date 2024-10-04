import React from 'react'
import Layout from '../component/layout/Layout'
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, TextField, Button } from '@mui/material'
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import India from "../images/india.jpg";
import '../style/about.css'


function Contact() {
  return (
    <Layout >
      <Box sx={{mt:{xs:"50px" ,lg:'100px'}}}  >

        <Box sx={{ display: 'flex' ,justifyContent: 'space-evenly', margin: '0 auto', gap:'0.5rem', mb:"2rem",boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)' }} width={{sm:'30rem', lg:'60rem'}} >

          <Box sx={{ flexBasis:{xs:"75%", lg:'50%'}, display:{xs:'block'}, p:'1rem' }}>
            <img src={India} style={{
             objectFit: 'cover', 
             width: '100%', 
             height: '100vh',
            //  display: 'block', 
            }} className='img1'></img>
          </Box>

          <Box sx={{ flexBasis: '50%', alignItems: 'center',p:'1rem' }}>

            <Typography fontSize={{sm:25, lg:45}}  >Get Touch With Us</Typography>
            <Typography variant='body' sx={{ fontWeight: 300 }}>Parent container responsive and maintaining  </Typography>
            <br></br>
            <form style={{ marginTop: '20px' }}>

              <label htmlFor='name' style={{ mb: '5px', display: 'block' }}>Name
              </label>
              <br></br>
              <input
                name="name"
                style={{
                  width: '90%',
                  padding: '0.7rem',
                  borderRadius: '1rem',
                  marginBottom: '0.5rem',
                  border: '1px solid white',
                  fontSize: '1rem',
                  outline: 'none'
                }}
                // value={formValues.name}
                // onChange={handleInputChange}
                required
                fullWidth
              />

              <br></br>
              <label htmlFor='email' style={{ mb: '5px', display: 'block' }}> Email

              </label>
              <br></br>
              <input
                style={{
                  width: '90%',
                  padding: '0.7rem',
                  borderRadius: '1rem',
                  marginBottom: '0.5rem',
                  border: '1px solid white',
                  fontSize: '1rem',
                  outline: 'none'
                }}
                name="email"
                // value={formValues.name}
                // onChange={handleInputChange}
                required
                fullWidth
              />

              <label htmlFor='call' style={{ mb: '5px', display: 'block' }}>Conatct Number
              </label>
              <br></br>
              <input
                name=" contact"
                style={{
                  width: '90%',
                  padding: '0.7rem',
                  borderRadius: '1rem',
                  marginBottom: '0.5rem',
                  border: '1px solid white',
                  fontSize: '1rem',
                  outline: 'none'
                }}
                // value={formValues.name}
                // onChange={handleInputChange}
                required
                fullWidth
              />

              <br></br>
              <label htmlFor='msg' style={{ mb: '5px', display: 'block' }}>Message

              </label>
              <br></br>
              <input
                name="msg"
                // value={formValues.name}
                // onChange={handleInputChange}
                required
                style={{
                  width: '90%',
                  height: '5rem',
                  padding: '0.7rem',
                  borderRadius: '1rem',
                  marginBottom: '0.5rem',
                  border: '1px solid white',
                  fontSize: '1rem',
                  outline: 'none'
                }}
                fullWidth
              />


              <br></br>
              <Button sx={{ width: '35px', borderRadius: '17px', mt: 5, backgroundColor: 'blue', color: 'white', pt: 1, pb: 1, pl: 10, pr: 10, ml:{sm:2, lg:7} }} alignItems='center' >Submit</Button>
            </form>
          </Box>


        </Box>
{/* 
        <Box sx={{ m: 5, mb: 15 }} ml={{ sm: 10, lg: 45 }} mr={{ sm: 10, lg: 45 }}>
          <TableContainer component={Paper} >
            <Table aria-label='contact-paper'>
              <TableHead sx={{ border: '1px solid black' }}>
                <TableRow>
                  <TableCell variant='h5' sx={{ backgroundColor: 'black', textAlign: 'center', color: 'white', fontSize: 20 }}>
                    Conatct Details
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody sx={{ backgroundColor: '#ece0d1' }}>
                <TableRow>
                  <TableCell sx={{ border: '1px solid black' }}>
                    <SupportAgentIcon sx={{ pt: 1 }} /> 1800-555-111 (Toll-free)
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell sx={{ border: '1px solid black' }}>
                    <EmailIcon sx={{ pt: 1 }} /> foodcourthelp@gmail.com
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell sx={{ border: '1px solid black' }}>
                    <CallIcon sx={{ pt: 1 }} /> 6263228218
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Box> */}


      </Box>

    </Layout>
  )
}

export default Contact
