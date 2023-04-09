import * as React from 'react';

import TextField from '@mui/material/TextField';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import Avatar from '@mui/material/Avatar';

import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button';

export default function FormDialog({onClose}) {
//   const [open, setOpen] = useState(false);

// //   const handleClickOpen = () => {
// //     setOpen(false);
// //   };

//   const handleClose = () => {
//     setOpen(false);
//   };

  return (
    <div>
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent sx={{p:"60px"}}>
 <Avatar sx={{
         height: { xs: 34, sm:40, md: 103},
          width: { xs: 34, sm:40, md: 103},}}/>
          {/* <DialogContentText>
            To subscribe to this website, please enter your email address here. We
            will send updates occasionally.
          </DialogContentText> */}
          {/* <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          /> */}
        </DialogContent>
        <DialogActions>
          <Button  onClick={onClose}></Button>
        </DialogActions>
    </div>
  );
}
