import React from 'react';
import { Box, Button, Grid, Typography, Paper } from '@material-ui/core';
import { useStyles } from '../theme';
import { tabContent } from '../data';
import TabContent from './TabContent';

const TabTest = () => {
  const [currentSlide, setCurrentSlide] = React.useState(1);
  const classes = useStyles();
  return (
    <div style={{ display: 'flex', zIndex: 2 }}>
      <Paper square elevation={1}>
        <Box width="794px">
          <Box ml="auto" width="430px" pr={8} mt={5}>
            {tabContent
              .filter(({ id }) => id === currentSlide)
              .map(({ title, text, sort, weight, img, price }) => (
                <TabContent
                  key={title}
                  title={title}
                  text={text}
                  sort={sort}
                  weight={weight}
                  img={img}
                  price={price}
                />
              ))}
          </Box>
        </Box>
      </Paper>
      <Box>
        <Grid item xs={2}>
          <div>
            {tabContent.map((item, index) => (
              <Button
                key={item.title}
                onClick={() => setCurrentSlide(index + 1)}
                className={
                  currentSlide === index + 1
                    ? classes.tabActive
                    : classes.tabNotActive
                }
              >
                <Typography variant="h2" color="primary" align="center">
                  {index + 1}
                </Typography>
              </Button>
            ))}
          </div>
        </Grid>
      </Box>
    </div>
  );
};

export default TabTest;
