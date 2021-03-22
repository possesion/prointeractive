import React from 'react';
import { Box, Grid, Typography } from '@material-ui/core';
// import classes from '*.module.css';
import { useStyles } from '../theme';
import CoffeeSlider from '../components/CoffeeSlider';

const Coffee = () => {
  const classes = useStyles();
  return (
    <Box height="894px" style={{ position: 'relative' }}>
      <Box className={classes.coffeeBg}></Box>
      <Grid container justify="center">
        <Grid item>
          <Box
            display="flex"
            justifyContent="center"
            flexDirection="column"
            alignItems="center"
            mb={7.2}
          >
            <Box mb={0.4}>
              <Typography variant="subtitle1" color="primary">
                Choose Your Favorite
              </Typography>
            </Box>
            <Typography variant="h2" color="primary">
              CHUẨN GU ĐÚNG VỊ
            </Typography>
          </Box>
        </Grid>
        <Box
          ml={16}
          height='556px'
          width='1300px'
        >
            <CoffeeSlider />
        </Box>
      </Grid>
    </Box>
  );
};

export default Coffee;
