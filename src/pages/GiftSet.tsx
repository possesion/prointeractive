import React from 'react';
import {
  Box,
  Container,
  Grid,
  Paper,
  Typography,
} from '@material-ui/core';
import { useStyles } from '../theme';
import TabTest from '../components/CoffeeTabs';

const GiftSet = () => {
  const classes = useStyles();
  // const handleChange = (event: any, newValue: number) => {
  //   setValue(newValue);
  // };

  return (
    <Container maxWidth="lg" className={classes.giftSetBg}>
      <Box className={classes.giftSetBgSecondary}/>
      <Box height="100vh">
        <Grid container justify="center">
          <Grid item>
            <Box
              display="flex"
              justifyContent="center"
              flexDirection="column"
              alignItems="center"
              mb={8}
              mt={11}
            >
              <Box mb={0.4}>
                <Typography variant="subtitle1" color="primary">
                  Best Gift For Best Friend
                </Typography>
              </Box>
              <Typography variant="h2" color="primary">
                GIFTSET
              </Typography>
            </Box>

            <Paper
              elevation={1}
              className={classes.giftSetContent}
            >
              <Box className={classes.sliderContentBox}>
                <TabTest />
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default GiftSet;
