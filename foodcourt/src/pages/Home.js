import React from 'react'
import Layout from '../component/layout/Layout'
import { Button } from '@mui/material'
import {Link} from "react-router-dom"
import banner from "../images/banner.jpeg"
import '../style/home.css'

function Home() {
  return (
   <Layout>
    <div className='home' style={{backgroundImage:`url(${banner})`}}>
      <div className='headerConta'>
        <h1>Food Court</h1>
        <p>Get The Best Food All India</p>
        <Link to={'/menu'} >
        <Button >Order Now</Button>
        </Link>
      </div>
    </div>
   </Layout>
  )
}

export default Home
