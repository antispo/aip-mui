import React, { Fragment } from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import useStyles from './useStyles';

import LoginForm from './LoginDialog';
import SignupForm from './SignupDialog';

import UserIcon from './UserIcon';
import AipMenu from './MenuIcon';
import AppTitle from './AppTitle';

export default ({ user, login, logout, signup }) => {
  const classes = useStyles();
  const title = user ? user.username : 'Welcome!';
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <AipMenu classes={classes} />

          <AppTitle classes={classes} title={title} />

          {user === null ? (
            <Fragment>
              <SignupForm signup={signup} />
              <LoginForm login={login} />
            </Fragment>
          ) : (
            <UserIcon user={user} logout={logout} />
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};
