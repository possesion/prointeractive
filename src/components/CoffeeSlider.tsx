import React from 'react';
import CoffeeCard from './CoffeeCard';
import { coffee } from '../data';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
// import { useStyles } from '../theme';

const CoffeeSlider = () => {
  // const classes = useStyles();
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
      partialVisibilityGutter: 40,
    },
  };
  return (
    <Carousel
      additionalTransfrom={0}
      arrows
      className=""
      containerClass="carousel-container"
      //   draggable
      focusOnSelect={false}
      infinite
      itemClass="carousel-item-padding"
      keyBoardControl
      minimumTouchDrag={80}
      renderButtonGroupOutside={false}
      renderDotsOutside={false}
      responsive={responsive}
    >
      {coffee.map(({ title, text, img, price }, index, arr) => {
          const lastIdx = arr.length - 1;
        let newIdx;
        if (index < arr.length - 3) {
          newIdx =  index + 3;
        } else {
          newIdx = (index + 3) % lastIdx;
        }
        return (
          <div key={title}>
            <CoffeeCard title={title} text={text} price={price} img={img} />
            <CoffeeCard
              title={arr[newIdx].title}
              text={arr[newIdx].text}
              price={arr[newIdx].price}
              img={arr[newIdx].img}
            />
          </div>
        );
      })}
    </Carousel>
  );
};

export default CoffeeSlider;
