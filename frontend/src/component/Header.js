import React from 'react'
import { Box,styled } from '@mui/material'
import headerImage from '../images/headerImage.jpg'

const Header = () => {

  const StyleHeader = styled(Box)(({theme})=>(
    {
        display : 'flex',
        justifyContent: 'center',
        minHeight : 400,
        backgroundImage : `url(${headerImage})`,
        backgroundSize: 'cover',
        backgroundPosition : 'center',
        backgroundColor : theme.palette.secondary.main
    }
  ));

  return (
    <>
       <StyleHeader>

       </StyleHeader>
    </>
  )
}

export default Header
