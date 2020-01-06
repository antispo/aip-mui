import React, { Fragment, useState } from 'react';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

export default ({ signup }) => {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState({});

  const handleClose = () => {
    if (
      input.email &&
      input.username !== undefined &&
      input.password !== undefined
    )
      signup(input.email, input.username, input.password);
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
        color="inherit"
        onClick={() => {
          setOpen(true);
        }}
      >
        signup
      </Button>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Sigup</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            name="email"
            label="Email"
            type="email"
            // value={username}
            onChange={handleChange}
            // fullWidth
          />
          <br />
          <TextField
            // autoFocus
            margin="dense"
            name="username"
            label="Username"
            type="user"
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
