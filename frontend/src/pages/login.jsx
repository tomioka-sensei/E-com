import React from 'react'
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { Avatar } from '@mui/material';
import LockPersonOutlinedIcon from '@mui/icons-material/LockPersonOutlined';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


const Login = () => {
  return (
    <Grid>
     <Paper elevation={10} className='p-6 h-96 w-80 my-8 mx-auto'>
        <Grid align = "center">
        <Avatar className='bg-red-950'><LockPersonOutlinedIcon/></Avatar>
        <span className='font-bold text-2xl'>SignIn</span>
        </Grid>
         
         <Grid className='text-center items-center mt-2 ' >
         <TextField id="standard-basic" label="Email"  placeholder = "Enter your email" variant="standard" required fullWidth/>
         <TextField id="standard-basic" label="Password" placeholder = "Enter Password" variant="standard" type='password' required fullWidth/>
         </Grid>

         <Button variant="contained" className='my-3'>Login</Button>

     </Paper>
    </Grid>
  )
}

export default Login