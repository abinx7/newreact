import { Box, Button, Typography, styled } from '@mui/material';
import React from 'react';
import logo from './../assets/logo.png';
import { Link } from 'react-router-dom';
import Welcome from './Welcome';

// Define styles and components outside the functional component
const CustomButton = styled(Button)(({ theme }) => ({
    backgroundColor: '#0F1B4C',
    color: '#fff',
    fontWeight: '700',
    fontSize: '14px',
    cursor: 'pointer',
    padding: '0.5rem 1.25rem',
    borderRadius: '7px',
    textTransform: 'none',
    display: 'block',
    border: '2px solid transparent'
}));

const NavBarLink = styled(Typography)(() => ({
    fontSize: '15px',
    color: '#4F5361',
    fontWeight: 'bold',
    // cursor: 'pointer',
    // '&:hover': {
    //     color: '#fff'
    // }
}));

const Homepage = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '20px',
                maxWidth: 'auto',
                backgroundColor: 'orange',
                marginLeft: '0px',
                marginBottom: '-24px'
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <img width={70} src={logo} alt="Logo" />
                </Box> 
                <Button><Link to={'/login'} style={{textDecoration:'none', color:'white'}}>
                Home
           </Link></Button>&nbsp;&nbsp;
                <NavBarLink variant="body2"><Link to={'/login'} style={{textDecoration:'none', color:'white'}}>
           Services
           </Link></NavBarLink>&nbsp;&nbsp;&nbsp;&nbsp;
                <NavBarLink variant="body2"><Link to={'/login'} style={{textDecoration:'none', color:'white'}}>
                About Us
           </Link></NavBarLink>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '2.5rem'
                }}
            >
                <NavBarLink variant="body2"><Link to={'/login'} style={{textDecoration:'none', color:'white'}}>
                Login
           </Link></NavBarLink>
              <CustomButton variant="body2"><Link to={'/signup'} style={{textDecoration:'none', color:'white'}}>
                Sign Up
           </Link></CustomButton>
            </Box>
            {/* <Box>
                <Welcome/>
            </Box> */}
        </Box>
        
    );
};

export default Homepage;