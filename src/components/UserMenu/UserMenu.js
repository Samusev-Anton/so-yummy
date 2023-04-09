import { useDispatch } from 'react-redux';
import { logout } from 'redux/auth/auth-operations';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { selectUser } from 'redux/auth/selectors';
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


export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handelLogoutUser = () => {
    dispatch(logout());
  };
  const [open, setOpen] = useState(false);

  const handleClickOpenEditProfile = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Box sx={{ display: { xs: 'flex', md: 'flex', alignItems: 'center' } }}><Tooltip title="Open settings">
        <IconButton onClick={handleOpenUserMenu} onClose={handleCloseUserMenu}>
          <Avatar alt="avatar" src="" sx={{
            height: { xs: 34, sm: 40, md: 44 },
            width: { xs: 34, sm: 40, md: 44 },
          }} />
        </IconButton>
      </Tooltip>
        <Typography sx={{
          fontWeight: 600,
          color: '#22252A',
          textDecoration: 'none',
          fontFamily: 'Poppins, sans-serif'
        }}>{user.name}</Typography>
      </Box>

      <Menu
        anchorEl={anchorElUser}
        id="account-menu"
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
        sx={{ p: 0, }}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            // width: { xs: '161px', sm:'177px',},
            // height: { xs: '130px', sm:'140px',},
            p: '18px',
            // display: {xs: 'flex', justifyContent:'center'},
            border: '1px solid #8BAA36',
            boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
            mt: 1.5,
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={handleClickOpenEditProfile} sx={{ mb: '32px', p: 0, display: { xs: 'flex', md: 'flex', justifyContent: 'space-between' } }}>
          Edit profile
          <EditIcon sx={{ ml: '53px', }} />
        </MenuItem>
        <Dialog open={open} onClose={handleClose} >
          <FormDialog onClose={handleClose} />
        </Dialog>
        <MenuItem>
          <ClassicButton onClick={handelLogoutUser}>
            Logout <ArrowForwardIcon sx={{ fontSize: 18 }} />
          </ClassicButton>
        </MenuItem>

      </Menu>
    </>
  );
};