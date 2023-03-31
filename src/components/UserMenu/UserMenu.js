// import { useDispatch } from 'react-redux';
// import { logOut } from 'redux/auth/operations';
// import { useAuth } from '../../hooks';
import { useState } from 'react';
import Menu from '@mui/material/Menu';
import Avatar from '@mui/material/Avatar';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';

import Tooltip from '@mui/material/Tooltip';
import Box from '@mui/material/Box';

import IconButton from '@mui/material/IconButton';
import { Button } from '@mui/material';
export const UserMenu = () => {
//   const dispatch = useDispatch();
//   const { user } = useAuth();
  const [anchorElUser, setAnchorElUser] = useState(null);
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

//   const handelLogoutUser = () => {
//     dispatch(logOut());
//   };

  return (
    <>
      
         <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ fontSize: 24 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
             
            </Tooltip> <Typography>name</Typography>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
                <MenuItem >
                
      <Button>Logout</Button>

                </MenuItem>
            </Menu>
          </>
  );
};