import React from 'react'
import {Box, IconButton, Typography} from '@mui/material'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

// function Footer() {
//   return (
//     <>
//     <Box sx={{bgcolor:"black", color:"#ece0d1" ,textAlign:'center', p:2}}>
//     {/* <IconButton 
//           sx={{ 
//             cursor: 'pointer', 
//             color: "#ece0d1",
//             '&:hover': {
//               color: 'goldenrod',
//               transform: 'translateX(5px)',
//               transition: 'all 300ms'
//             }
//           }}
//         >
//           <TwitterIcon sx={{ fontSize: 38, mr: 3 }} />
//         </IconButton> */}
//         <IconButton  sx={{cursor:'pointer', my:2,color: "#ece0d1", 
//         '& svg':{
//             fontSize:38,
//             mr:3
//         },
//           '& svg:hover':{
//               color: 'goldenrod',
//               transform: 'translateX(5px)',
//               transition: 'all 300ms'
            
//           }  
//             }} >
//             <FacebookIcon sx={{'&:hover':{
//                  color: 'goldenrod',
//                  transform: 'translateX(5px)',
//                  transition: 'all 300ms'
//             }}}/>
//             <InstagramIcon/>
//             <GitHubIcon/>
//             <EmailIcon></EmailIcon>
//             <TwitterIcon></TwitterIcon>
//         </IconButton>
//        <Typography variant='h5' sx={{'@media (max-width:600px)':{fontSize:'1rem'}}}>
//        All Rights Reserved &copy; FoodCourt
//        </Typography>
//     </Box>
//     </>
//   )
// }

function Footer() {
    return (
      <Box sx={{ bgcolor: "black", color: "#ece0d1", textAlign: 'center', p: 2 }}>
        <Box sx={{ display: 'flex', justifyContent: 'center', my: 2 }}>
          <IconButton 
            sx={{ 
              cursor: 'pointer', 
              color: "#ece0d1",
              '&:hover': {
                color: 'goldenrod',
                transform: 'translateY(-2px)',
                transition: 'all 300ms'
              }
            }}
          >
            <FacebookIcon sx={{ fontSize: 38, mx: 1 }} />
          </IconButton>
          <IconButton 
            sx={{ 
              cursor: 'pointer', 
              color: "#ece0d1",
              '&:hover': {
                color: 'goldenrod',
                transform: 'translateY(-2px)',
                transition: 'all 300ms'
              }
            }}
          >
            <InstagramIcon sx={{ fontSize: 38, mx: 1 }} />
          </IconButton>
          <IconButton 
            sx={{ 
              cursor: 'pointer', 
              color: "#ece0d1",
              '&:hover': {
                color: 'goldenrod',
                transform: 'translateY(-2px)',
                transition: 'all 300ms'
              }
            }}
          >
            <GitHubIcon sx={{ fontSize: 38, mx: 1 }} />
          </IconButton>
          <IconButton 
            sx={{ 
              cursor: 'pointer', 
              color: "#ece0d1",
              '&:hover': {
                color: 'goldenrod',
                transform: 'translateY(-2px)',
                transition: 'all 300ms'
              }
            }}
          >
            <EmailIcon sx={{ fontSize: 38, mx: 1 }} />
          </IconButton>
          <IconButton 
            sx={{ 
              cursor: 'pointer', 
              color: "#ece0d1",
              '&:hover': {
                color: 'goldenrod',
                transform: 'translateY(-2px)',
                transition: 'all 300ms'
              }
            }}
          >
            <TwitterIcon sx={{ fontSize: 38, mx: 1 }} />
          </IconButton>
        </Box>
        <Typography variant='h5' sx={{ '@media (max-width:600px)': { fontSize: '1rem' } }}>
          All Rights Reserved &copy; FoodCourt
        </Typography>
      </Box>
    );
  }

export default Footer
