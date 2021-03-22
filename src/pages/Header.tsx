import React from 'react';
import { Box, Grid, Typography } from '@material-ui/core';
import { useStyles } from '../theme';

const Header = () => {
  const classes = useStyles();
  const menus = [
    'COFFEE',
    'PHIN MẠ MÀU',
    'COMBO PHIN PHÊ',
    'GIFTSET',
    'LIÊN HỆ',
  ];
  return (
    <Grid container>
      <Grid item className={classes.headerLeft}>
        <img className={classes.logo} src="/prointeractive/images/revo_logo.png" alt="logo" />
        <Box className={classes.headerTitle}>
          <Typography
            variant="h1"
            color="primary"
            align="left"
            className={classes.headerTitlePadding}
          >
            Your
          </Typography>
          <Typography
            className={classes.headerTitleBg}
            variant="h1"
            color="textPrimary"
          >
            PERSONALIZED
          </Typography>
          <Typography
            variant="h1"
            color="primary"
            align="left"
            className={classes.headerTitlePadding}
          >
            COFFEE
          </Typography>
        </Box>
      </Grid>
      <Grid item className={classes.headerBg}>
        <img
          className={classes.headerBg}
          src="/prointeractive/images/bgmain.png"
          alt="background"
        />
      </Grid>
      <Grid item className={classes.headerMenu}>
        <img
            className={classes.cartIcon}
          src="/prointeractive/images/CART.png"
          alt="cart"
        />
        <Grid container alignItems="center" style={{ height: '100%' }}>
          <Box pl={6}>
          <Grid item>
            <Typography variant="h5" color="textPrimary">
              <b>TRANG CHỦ</b>
            </Typography>
            <ul className={classes.headerMenuList} aria-label="main mailbox folders">
              {' '}
              {menus.map((menu) => (
                <li key={menu} className={classes.headerMenuListEl}>
                  <Typography variant="h5" color="textPrimary" align="left">
                    {menu}
                  </Typography>
                </li>
              ))}
            </ul>
          </Grid>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Header;
