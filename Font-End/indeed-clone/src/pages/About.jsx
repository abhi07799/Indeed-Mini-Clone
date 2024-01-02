import styled from '@emotion/styled';
import { Box, Typography } from '@mui/material';
import React from 'react'

const Component = styled(Box)({
  display: 'flex',
  height: '100vh',
  alignItems: 'center',
  margin: '0 110px',
  '& > div': {
      width: '50%',
      display: 'flex',
      justifyContent: 'center',
      '& > div > p': {
          fontSize: 35,
          lineHeight: 1.25,
          letterSpacing: -1
      }
  }
})

export default function About() 
{
  const imgURL = "https://d341ezm4iqaae0.cloudfront.net/jobseeker/wp-content/uploads/2021/07/08192932/Image-Frame.png";
  return (
    <>
      <Component>
        <Box>
          <Box>
            <Typography variant="h2">About Indeed</Typography>
            <p><br />Indeed is the #1 job site in the world1 with over 350M+ unique visitors every month2. Indeed strives to put job seekers first, giving them free access to search for jobs, post resumes, and research companies. Every day, we connect millions of people to new opportunities.</p>
          </Box>
        </Box>
        <Box>
          <img src={imgURL} alt="about" style={{ width: 600 }} />
        </Box>
      </Component>
    </>
  )
}
