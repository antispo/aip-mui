import React from 'react';

import { IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

export default classes => {
  return (
    <IconButton
      edge="start"
      className={classes.menuButton}
      color="inherit"
      aria-label="menu"
    >
      <MenuIcon />
    </IconButton>
  );
};
