// import { useDispatch } from 'react-redux';
// import { logOut } from 'redux/auth/operations';
// import { useAuth } from '../../hooks';
import { useState } from 'react';
import Menu from '@mui/material/Menu';
import Avatar from '@mui/material/Avatar';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import ListItemIcon from '@mui/material/ListItemIcon';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import { ClassicButton } from 'components/GlobalStyles';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


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
      <Box sx={{display: { xs: 'flex', md: 'flex', alignItems:'center'}}}><Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} >
                <Avatar alt="" src="/static/images/avatar/2.jpg" sx={{
         height: { xs: 34, sm:40, md: 44},
          width: { xs: 34, sm:40, md: 44},}}/>
              </IconButton>
            </Tooltip> 
            <Typography sx={{
          fontWeight: 600,
          color: '#22252A',
          textDecoration: 'none',
        }}>Name</Typography>
        </Box>
         
        <Menu
        anchorEl={anchorElUser}
        id="account-menu"
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}

        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            width: '177px',
            height: '140px',
            filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
            mt: 1.5,
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem >
        Edit profile
       
        </MenuItem>
        <MenuItem >
        <ClassicButton>
        Logout <ArrowForwardIcon/>
        </ClassicButton>
        </MenuItem>
      </Menu>
      </>
  );
};