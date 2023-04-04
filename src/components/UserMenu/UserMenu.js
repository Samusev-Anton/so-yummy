// import { useDispatch } from 'react-redux';
// import { logOut } from 'redux/auth/operations';
// import { useAuth } from '../../hooks';
import { useState } from 'react';
import Menu from '@mui/material/Menu';
import Avatar from '@mui/material/Avatar';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import { ClassicButton } from 'components/GlobalStyles';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import EditIcon from '@mui/icons-material/Edit';
import Dialog from '@mui/material/Dialog';
import FormDialog from './EditProfile';
import CloseIcon from '@mui/icons-material/Close';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import { green } from '@mui/material/colors';

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

  // const handelLogoutUser = () => {
  //   dispatch(logOut());
  // };
const [open, setOpen] = useState(false);

  const handleClickOpenEditProfile = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Box sx={{display: { xs: 'flex', md: 'flex', alignItems:'center'}}}><Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} onClose={handleCloseUserMenu}>
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
            // width: { xs: '161px', sm:'177px',},
            // height: { xs: '130px', sm:'140px',},
            p: '18px',
            // display: {xs: 'flex', justifyContent:'center'},
            boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
            mt: 1.5,
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={handleClickOpenEditProfile} sx={{mb:'32px',}}>
        Edit profile
          <EditIcon sx={{ml:'32px',}}/>
        </MenuItem>
  <Dialog open={open} onClose={handleClose} >
        <FormDialog onClose={handleClose}/>
        </Dialog>
        <MenuItem>
        <ClassicButton>
        Logout <ArrowForwardIcon sx={{ fontSize: 18 }}/>
        </ClassicButton>
        </MenuItem>

      </Menu>
      </>
  );
};