import React from 'react';

import Typography from '@material-ui/core/Typography';

export default ({ classes, title }) => {
  return (
    <Typography variant="h4" className={classes.root}>
      {title}
    </Typography>
  );
};
