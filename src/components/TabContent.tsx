import React from 'react';
import { Box, Button, Grid, Typography } from '@material-ui/core';
import { useStyles } from '../theme';

interface ITabContent {
  img: string;
  price: number;
  title: string;
  text: string;
  sort: string;
  weight: string;
}
const TabContent = ({ img, price, title, text, sort, weight }: ITabContent) => {
  const classes = useStyles();
  return (
    <Grid container justify="flex-end">
      <Grid item>
        <Box mt={3.2} mb={1}>
          <Typography variant="subtitle1" color="secondary" align="left">
            {price.toFixed(3)}
          </Typography>
        </Box>
        <Box mb={2}>
          <Typography variant="h4" color="primary" align="left">
            {title}
          </Typography>
        </Box>
        <Box>
          <Typography variant="h5" align="left">
            {text}
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12} style={{ marginTop: '22px' }}>
        <Grid container justify="space-between">
          <Grid item xs={7}>
            <Grid container alignItems="center">
              <Grid item xs={2}>
                <img
                  src="/prointeractive/images/coffee-beans.png"
                  alt="beans"
                  style={{ width: '26px', height: '26px' }}
                />
              </Grid>
              <Grid item xs={9}>
                <Typography variant="h5" align="left" color="primary">
                  Loại hạt
                </Typography>
                <Typography variant="h5" align="left" color="primary">
                  <b>{sort}</b>
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={5}>
            <Grid container alignItems="center">
              <Grid item xs={4}>
                <img
                  src="/prointeractive/images/mountain.png"
                  alt="beans"
                  style={{ width: '30px', height: '25px' }}
                />
              </Grid>
              <Grid item xs={8}>
                <Typography variant="h5" align="left" color="primary">
                  Độ cao
                </Typography>
                <Typography variant="h5" align="left" color="primary">
                  <b>{weight}</b>
                </Typography>
              </Grid>

            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Box mt={5}>
                <Grid container justify="space-between">
                  <Grid item xs={5}>
                    <Button
                      size="large"
                      variant="contained"
                      color="secondary"
                      className={classes.tabActionButton}
                    >
                      <Typography variant="h5" color="textPrimary">
                        <b>MUA NGAY</b>
                      </Typography>
                    </Button>
                  </Grid>
                  <Grid item xs={6}>
                    <Button size="small" color="primary">
                      <Typography variant="h5" color="primary">
                        <b>CHI TIẾT</b>
                      </Typography>
                    </Button>
                  </Grid>
                </Grid>
              </Box>
              </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <img src={img} alt="tabImg" className={classes.tabImage} />
      </Grid>
    </Grid>
  );
};

export default TabContent;
