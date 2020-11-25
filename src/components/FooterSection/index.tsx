import React, { memo } from 'react';
import { Link as LinkRouter } from 'react-router-dom';
import { Instagram } from '@material-ui/icons';
import { withStyles } from '@material-ui/core/styles';
import {
  Box,
  Container,
  Typography,
  Grid,
  Hidden,
  Link,
} from '@material-ui/core';

import useStyles from './styles';

import logo from '../../assets/logo-bottom.svg';
import logoMagaventures from '../../assets/logo-magaventures.svg';

const WhiteTypography = withStyles({ root: { color: '#ffffff' } })(Typography);

const FooterSection: React.FC = () => {
  const { logoContainer } = useStyles();

  return (
    <Box
      position="fixed"
      left="0"
      right="0"
      bottom="0"
      height="50px"
      bgcolor="primary.main"
      display="flex"
      alignItems="center"
    >
      <Container>
        <Grid
          container
          spacing={2}
          alignItems="center"
          justify="space-between"
          wrap="nowrap"
        >
          <Grid item sm={4} xs={6}>
            <Box display="flex" justifyContent="flex-start">
              <LinkRouter to="/">
                <Box display="flex" alignItems="center" justifyContent="center">
                  <img src={logo} alt="Logo" width="86px" height="42px" />
                </Box>
              </LinkRouter>
            </Box>
          </Grid>
          <Grid item sm={4} xs={6}>
            <Box className={logoContainer}>
              <Link
                href="https://www.instagram.com/viinfantil/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Box display="flex" alignItems="center" justifyContent="center">
                  <Instagram htmlColor="#ffffff" />
                  <Box display="flex" m={1}>
                    <WhiteTypography>Instagram</WhiteTypography>
                  </Box>
                </Box>
              </Link>
            </Box>
          </Grid>
          <Hidden only="xs">
            <Grid item sm={4} xs={false}>
              <Box display="flex" justifyContent="flex-end">
                <Link
                  color="inherit"
                  align="center"
                  href="https://www.magaventures.com.br/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <img src={logoMagaventures} alt="Logo Magaventures" />
                </Link>
              </Box>
            </Grid>
          </Hidden>
        </Grid>
      </Container>
    </Box>
  );
};

export default memo(FooterSection);
