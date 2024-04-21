import { Box, Button, Typography, styled } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'


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
    border: '2px solid transparent',
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


const Navbar = () => {
  return (
    <div className='navbar'>
        <img src="" alt="" className='logo'/>
        <ul>
            <li>Home</li>
            <li>Services</li>
            <li>About Us</li>
        </ul>

        <div className='searchbox'>
            <input type='text' placeholder='Search'/>
            <img src="" alt="" />
        </div>
        <div className='but'>
                <CustomButton className='button'><Link to={'/login'} style={{textDecoration:'none', color:'white'}}>
                Sign Up
           </Link></CustomButton>
        </div>
    </div>
  )
}

export default Navbar