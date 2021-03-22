import React from 'react';
import { Box, Card, Grid } from '@material-ui/core';
import { useStyles } from '../theme';

// import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

interface ICard {
  img: string;
  title: string;
  text: string;
  price: number;
}

const CoffeeCard = (props: ICard) => {
  const { img, title, text, price } = props;
  const classes = useStyles();
  return (
    <Card className={classes.coffeCard} style={{ margin: '15px 1px 30px 5px' }} square>
      {/* <CardActionArea> */}
      <CardMedia
        component="img"
        alt="Contemplative Reptile"
        image={img}
        className={classes.coffeeSliderImg}
        title="Contemplative Reptile"
      />
      <Box padding="12px 44px 46px">
        <Grid container direction="column" justify="space-between" style={{height: '100%'}}>
          <Grid item>
            <Box mt={3.2} mb={1}>
              <Typography variant="subtitle1" color="secondary" align="left">
                {price.toFixed(3)}
              </Typography>
            </Box>
            <Box mb={3}>
            <Typography variant="h4" color="primary" align="left">
              {title}
            </Typography>
            </Box>
            <Typography variant="h5"  align="left">
              {text}
            </Typography>
          </Grid>

          <Grid item lg={10}>
            <Grid container justify="space-between" spacing={3}>
              <Grid item>
                <Button
                  size="small"
                  variant="contained"
                  color="secondary"
                  style={{ borderRadius: '16px', padding: '4px 24px' }}
                >
                  <Typography variant="h5" color="textPrimary">
                    <b>MUA NGAY</b>
                  </Typography>
                </Button>
              </Grid>
              <Grid item>
                <Button size="small" color="primary">
                  <Typography variant="h5" color="primary">
                    <b>CHI TIẾT</b>
                  </Typography>
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Card>
  );
};

export default CoffeeCard;
