import React from "react";
import { Carousel as CarouselAntd } from "antd";

const contentStyle = {
  width: "100%",
  height: "550px",
  objectFit: "cover",
};

export default function Carousel() {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };

  return (
    <CarouselAntd dotPosition='right' autoplay afterChange={onChange}>
      <div>
        <img
          style={contentStyle}
          src='http://designercomvn.s3.ap-southeast-1.amazonaws.com/wp-content/uploads/2017/07/26020212/poster-phim-hanh-dong.jpg'
        />
      </div>
      <div>
        <img
          style={contentStyle}
          src='https://designercomvn.s3.ap-southeast-1.amazonaws.com/wp-content/uploads/2017/07/26020157/poster-phim-kinh-di.jpg'
        />
      </div>
    </CarouselAntd>
  );
}
