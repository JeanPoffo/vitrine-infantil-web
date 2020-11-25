import React from 'react';
import { Link as LinkRouter } from 'react-router-dom';
import { AppBar, Toolbar, Container, Box } from '@material-ui/core';

import logo from '../../assets/logo-top.svg';

const HeaderSection: React.FC = () => {
  return (
    <AppBar position="relative" color="inherit" elevation={0}>
      <Toolbar disableGutters>
        <Container>
          <Box p={1}>
            <LinkRouter to="/">
              <img src={logo} alt="Logo" width="120px" height="55px" />
            </LinkRouter>
          </Box>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default HeaderSection;
