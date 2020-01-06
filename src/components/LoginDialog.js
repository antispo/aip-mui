import React, { Fragment, useState } from 'react';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

export default ({ login }) => {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState({});
  // const username = useState('');
  // const password = useState('');

  const handleClose = () => {
    // console.log(input.username, input.password);
    if (input.username !== undefined && input.password !== undefined)
      login(input.username, input.password);
    setOpen(false);
  };

  const handleChange = event =>
    setInput({
      ...input,
      [event.currentTarget.name]: event.currentTarget.value
    });

  return (
    <Fragment>
      <Button
        // variant="outlined"
        color="inherit"
        onClick={() => {
          setOpen(true);
        }}
      >
        login
      </Button>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Login</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            name="username"
            label="Username"
            type="email"
            // value={username}
            onChange={handleChange}
            // fullWidth
          />
          <br />
          <TextField
            name="password"
            label="Password"
            type="password"
            autoComplete="current-password"
            // value={password}
            onChange={handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  );
};
