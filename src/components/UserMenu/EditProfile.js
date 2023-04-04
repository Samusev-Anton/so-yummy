import * as React from 'react';
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Dialog, IconButton } from '@mui/material';
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
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We
            will send updates occasionally.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button  onClick={onClose}>Subscribe</Button>
        </DialogActions>
    </div>
  );
}
