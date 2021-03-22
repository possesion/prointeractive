import React from 'react';
import { Box, Grid, Typography } from '@material-ui/core';
import { useStyles } from '../theme';

const Features = () => {
  const classes = useStyles();
  return (
    <Box>
      <Grid
        container
        alignItems="center"
        justify="center"
        style={{ height: '486px' }}
      >
        <Grid item>
          <Box
            display="flex"
            justifyContent="center"
            flexDirection="column"
            alignItems="center"
          >
            <Typography variant="subtitle1" color="primary" gutterBottom>
              Your Personalized Coffee
            </Typography>
            <Typography variant="h2" color="primary">
              COFFEE BUILD YOUR BASE
            </Typography>
          </Box>
        </Grid>

        <Grid item>
          <Grid container justify="space-between" className={classes.featureIconWrapper}>
            <Grid item xs={2}>
              <Grid container direction="column">
                <Grid item>
                  <img src="/prointeractive/images/icon1.png" alt="icon1" />
                </Grid>
                <Grid item>
                  <Box mb={1.5}>
                    <Typography gutterBottom variant="h4" align="center">
                      Nguồn gốc
                    </Typography>
                  </Box>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    align="center"
                  >
                    Những hạt cà phê Arabica, Robusta đạt chất lượng theo tiêu
                    chuẩn quốc tế.
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={2}>
              <Grid container direction="column">
                <Grid item>
                  <img src="/prointeractive/images/icon2.png" alt="icon1" />
                </Grid>
                <Grid item>
                  <Box mb={1.5}>
                    <Typography variant="h4" align="center">
                      Chất lượng
                    </Typography>
                  </Box>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    align="center"
                  >
                    Từng một hạt cà phê là cả một quá trình tập trung cao độ của
                    nghệ nhân cà phê.
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={2}>
              <Grid container direction="column">
                <Grid item lg={12}>
                  <img src="/prointeractive/images/icon3.png" alt="icon1" />
                </Grid>
                <Grid item lg={12}>
                  <Box mb={1.5}>
                    <Typography variant="h4" align="center">
                      Các loại hạt
                    </Typography>
                  </Box>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    align="center"
                  >
                    70% chất lượng tách cà phê đến từ nguồn gốc và chất lượng
                    green bean.
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={2}>
              <Grid container direction="column">
                <Grid item lg={12}>
                  <img src="/prointeractive/images/icon4.png" alt="icon1" />
                </Grid>
                <Grid item lg={12}>
                  <Box mb={1.5}>
                    <Typography variant="h4" align="center">
                      Pha chế
                    </Typography>
                  </Box>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    align="center"
                  >
                    Những hạt cà phê được lột xác qua quá trình rang xay kỹ
                    lưỡng và nghiêm ngặt.
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Features;
