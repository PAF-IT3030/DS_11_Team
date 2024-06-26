import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Grid, Typography } from '@mui/material'

function WorkoutPlansPage() {
  return (

   
    <Grid style={{ display: 'flex', flexDirection: 'column', padding: '0 50px', minHeight: 'calc(100vh - 100px)' }}>
       <Typography style={{ fontSize: '2.5rem', fontWeight: 'bold', fontFamily: 'font-mono',color:'rgb(59 130 246)',textAlign:'center'}}>Workout Plan</Typography>
    <Link to="/workoutplancategory"><Button variant="contained">
    Create Post
  </Button></Link>
  </Grid>
  )
}

export default WorkoutPlansPage