import React, { useEffect, useState } from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant='filled' {...props} />;
});

export function SuccessSnackbar({ openNotif, closeNotif, message }) {
  const [open, setOpen] = useState(openNotif);

  useEffect(() => {
    setOpen(openNotif);
  }, [openNotif]);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
    closeNotif();
  };

  return (
    <Snackbar
      open={open}
      autoHideDuration={1500}
      onClose={handleClose}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
    >
      <Alert
        onClose={handleClose}
        severity='success'
        sx={{ width: '100%', color: 'white' }}
      >
        {message}
      </Alert>
    </Snackbar>
  );
}

export function ErrorSnackbar({ openNotif, closeNotif, message }) {
  const [open, setOpen] = useState(openNotif);

  useEffect(() => {
    setOpen(openNotif);
  }, [openNotif]);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
    closeNotif();
  };

  return (
    <Snackbar
      open={open}
      autoHideDuration={3000}
      onClose={handleClose}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
    >
      <Alert
        onClose={handleClose}
        severity='error'
        sx={{ width: '100%', color: 'white' }}
      >
        {message}
      </Alert>
    </Snackbar>
  );
}
