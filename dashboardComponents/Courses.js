import { Button, Typography } from '@mui/material'
import Link from 'next/link'
import React from 'react'
import CourseTitleCSE from './CourseTitleCSE'

const Course_TiTle_CSE = () => {
  return (
    <div className='csePage'>
        <Typography style={{fontSize:'25px', color:'black',fontWeight:'bold',margin:'5rem 0.5rem'}} align='center'>Computer Science and Engineering</Typography>
        <CourseTitleCSE/>
        <Link href='/'><Button style={{margin:'3rem auto',marginBottom:'3rem'}} variant='contained' color='primary' disableRipple>Back to Home</Button></Link>
    </div>
  )
}

export default Course_TiTle_CSE