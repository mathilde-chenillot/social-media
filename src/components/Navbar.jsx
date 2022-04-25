import { Mail, Notifications, Pets } from '@mui/icons-material';
import { AppBar, Avatar, Badge, Box, InputBase, Menu, MenuItem, styled, Toolbar, Typography } from '@mui/material';
import React from 'react'

const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
});

const Search = styled('div')(({theme})=>({
  backgroundColor: 'white',
  padding: '0 10px',
  borderRadius: theme.shape.borderRadius,
  width: '40%',
}));

// if it's mobile screen, we just see avatar
// but if it's pc screen, we see avatar and notifications and mails
// IconsContainer for pc
// UserBox for mobile

const IconsContainer = styled(Box)(({theme})=>({
  display: 'none',
  alignItems: 'center',
  gap: '10px',
  [theme.breakpoints.up('sm')] : {
    display: 'flex',
  }
  // if it's small or bigger than small
  // if it's smaller than this breakpoint which is 600 it's gonna be displayed "none"
}));

const UserBox = styled(Box)(({theme})=>({
  display: 'flex',
  alignItems: 'center',
  gap: '20px',
  [theme.breakpoints.up('sm')] : {
    display: 'none',
  }
}));

// Component

const Navbar = () => {
  return (
    <AppBar position='sticky'>
      <StyledToolbar>
        <Typography variant='h6' sx={{ display: { xs: "none", sm: "block"}}}>NavBar</Typography>
          <Pets sx={{ display: { xs: "block", sm: "block"}}} />
          <Search>
            <InputBase placeholder='search ...' />
          </Search>
          <IconsContainer>
            <Badge badgeContent={4} color='error'>
              <Mail />
            </Badge>
            <Badge badgeContent={2} color='error'>
              <Notifications />
            </Badge>
            <Avatar sx={{ width: 30, height: 30 }} src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
          </IconsContainer>
          <UserBox>
            <Avatar sx={{ width: 30, height: 30 }} src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
            <Typography variant='span'>Mathilde</Typography>
          </UserBox>
      </StyledToolbar>

      {/* Menu */}
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        // anchorEl={anchorEl}
        open={true}
        // onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  )
}

export default Navbar;