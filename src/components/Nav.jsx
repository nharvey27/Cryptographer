import React from 'react';
import AppBar from 'material-ui/AppBar';
import Button from 'material-ui/Button';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';

const style = {
  backgroundColor: '#37474F',
};

const Nav = ({ classes }) => (
  <div>
    <AppBar style={style} position="static">
      <Toolbar>
        <Typography type="title" color="inherit">
          Cryptogropher
        </Typography>
      </Toolbar>
    </AppBar>
  </div>
);

export default Nav;
