import React, { useRef, useContext, useState } from 'react';
import { Button, Card, CardContent, CircularProgress, Grid, TextField, Typography } from '@mui/material';
import { Context } from '../context/Index';
import emailjs from '@emailjs/browser';
import Link from 'next/link'
import Course_TiTle_CSE from '../dashboardComponents/Courses';





const Apply = () => {
    const [state, setState] = useContext(Context)
  const initialState = { user_name: '', user_email: '', message:'',fatherName:'', motherName:'', mobile:'',address:'',program:state.program  }
  const [userData, setUserData] = useState(initialState)
  const { user_name,user_email, message, fatherName, motherName, address,mobile,program } = userData

  const handleChangeInput = e => {
    const {name, value} = e.target
    setUserData({...userData, [name]:value})
    
  } 
  const [progress, setProgress] = useState(false)
  const [visible, setVisible] = useState(false);
  const [see, setSee] = useState(false)
 
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
   setProgress(true)

    emailjs.sendForm('service_7znzq6h', 'template_2ofpvat', form.current, 'o91Jx-bDZ6JJ2B8Zs')
      .then((result) => {
        setUserData(initialState)
        setProgress(false)
        setVisible(true)
     
         
      }, (error) => {
          console.log(error.text);
      });
  };
    return (

      <>
     
      <div className='contactContainer'>
        {  progress? <CircularProgress/> :
        <> 
       
        { !visible? 
        <> 
      <Typography style={{fontSize:'25px',margin:'2rem',fontWeight:'bold', color:'black'}}  align="center">
         Application Form
       </Typography>
      <Grid>
        <Card style={{ maxWidth: 450, padding: "20px 5px", margin: "0 auto",marginBottom:'4rem' }}>
          <CardContent>
            {state.program}
            
            <form ref={form} onSubmit={sendEmail}>
              <Grid container spacing={3}>
                <div className='d-none'>
                <Grid  item xs={12}>
                
                <TextField 
                type='text'
                placeholder="Enter your full name" 
                label="Your Full Name" 
                variant="outlined" 
                fullWidth 
                required
                id="program"
                name="program"
                value={program}
                onChange={handleChangeInput} />
              </Grid>
                </div>
               
                <Grid  item xs={12}>
                  <TextField 
                  type='text'
                  placeholder="Enter your full name" 
                  label="Your Full Name" 
                  variant="outlined" 
                  fullWidth 
                  required
                  id="user_name"
                  name="user_name"
                  value={user_name}
                  onChange={handleChangeInput} />
                </Grid>
                <Grid  item xs={12}>
                  <TextField 
                  type='email'
                  placeholder="Enter your email address" 
                  label="Email" 
                  variant="outlined" 
                  fullWidth 
                  required
                  id="user_email"
                  name="user_email"
                  value={user_email}
                  onChange={handleChangeInput} />
                </Grid>
                <Grid  item xs={12}>
                  <TextField 
                  type='text'
                  placeholder="Enter your father's name" 
                  label="Father's Name" 
                  variant="outlined" 
                  fullWidth 
                  required
                  id="fatherName"
                  name="fatherName"
                  value={fatherName}
                  onChange={handleChangeInput} />
                </Grid>
                <Grid  item xs={12}>
                  <TextField 
                  type='text'
                  placeholder="Enter your mother's name" 
                  label="Mother's Name" 
                  variant="outlined" 
                  fullWidth 
                  required
                  id="motherName"
                  name="motherName"
                  value={motherName}
                  onChange={handleChangeInput} />
                </Grid>
                <Grid item  xs={12}>
                  <TextField 
                  placeholder="Enter your address" 
                  type='text'
                  label="Address" 
                  variant="outlined" 
                  fullWidth 
                  required
                  id="address"
                  name="address"
                  value={address}
                  onChange={handleChangeInput} />
                </Grid>
                <Grid item xs={12}>
                  <TextField 
                  type="number" 
                  placeholder="Enter your mobile number" 
                  label="Mobile No" 
                  variant="outlined" 
                  fullWidth 
                  required
                  id="mobile"
                  name="mobile"
                  value={mobile}
                  onChange={handleChangeInput} />
                </Grid>
                
                <Grid item xs={12}>
                  <TextField 
                  type="text" 
                  placeholder="Briefly describe your statement of purpose." 
                  label="Statement of Purpose" 
                  variant="outlined" 
                  fullWidth 
                  required
                  multiline
                  minRows={10}
                  id="message"
                  name="message"
                  value={message}
                  onChange={handleChangeInput} />
                </Grid>
                
                
              
                
               
                
        
        
              
                
                <Grid item xs={12}>
                  <Button type="submit" value="Send" variant="contained" color="primary" fullWidth>Submit</Button>
                </Grid>

              </Grid>
            </form>
          </CardContent>
        </Card>
      </Grid>
      </>
      :
      <> 
      {

      state.program==='Computer Science and Engineering'?
      <>
      <Typography style={{fontSize:'25px',margin:'2rem',fontWeight:'bold', color:'black'}}  align="center">
         Thank you!
       </Typography>
      <Grid>
        <Card elevation={3} style={{display:'flex',flexDirection:'column',justifyItems:"center", maxWidth: 450, padding: "20px 5px", margin: "4rem auto" }}>
          <CardContent>
            
            
           <Typography style={{fontWeight:'bold', color:'black', fontSize:'20px'}}>
           We will let you know if your application is granted by our admission committee.
            </Typography> 
           <Typography style={{fontWeight:'bold', marginTop:'3rem', color:'black', fontSize:'20px'}}>
           You can now check our CSE courses and credits to get deeper into our program's pros and cons.
            </Typography> 
          </CardContent>
                  <button onClick={() => setSee(true)} className='nextBackButton'>Continue</button>
        </Card>
      </Grid>
      </>
      :
      <>
      <Typography style={{fontSize:'25px',margin:'2rem',fontWeight:'bold', color:'black'}}  align="center">
         Thank you!
       </Typography>
      <Grid>
        <Card elevation={3} style={{ maxWidth: 450, padding: "20px 5px", margin: "4rem auto" }}>
          <CardContent>
            
            
           <Typography style={{fontWeight:'bold', color:'black', fontSize:'20px'}}>
           We will let you know if your application is granted by our admission committee.
            </Typography> 
          </CardContent>
         
        </Card>
      </Grid>
      </>
      }
      </>   
      }
           </>}
      </div>
      </>

      )
}

export default Apply