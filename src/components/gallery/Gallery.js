import React, { Component } from 'react'
import { Icon, Row, Col } from 'antd';
import Slider from "react-slick";
import './Gallery.scss';

const NextArrow = props => {
  const { onClick } = props;
  return (
    <div className="gallery-carousel-next-arrow" onClick={onClick}>
      <Icon type="right" />
    </div>
  );
};

const PreviousArrow = props => {
  const { onClick } = props;
  return (
    <div className="gallery-carousel-prev-arrow" onClick={onClick}>
      <Icon type="left" />
    </div>
  );
};

class Gallery extends Component {
  render () {
    const settings = {
      dots: false,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 1,
      autoplay: true,
      speed: 500,
      nextArrow: <NextArrow/>,
      prevArrow: <PreviousArrow/>
    };
    return (
      <div className="gallery-container maxWidth">
        <div className="heading">
          <h1>Gallery</h1>
          <hr />
        </div>
        <Row className="gallery-content">
          <Col xs={24} sm={24} md={15} lg={15}>
            <Slider {...settings}>
              <div className="gallery-item">
                <h3>1</h3>
              </div>
              <div className="gallery-item">
                <h3>2</h3>
              </div>
              <div className="gallery-item">
                <h3>3</h3>
              </div>
              <div className="gallery-item">
                <h3>4</h3>
              </div>
              <div className="gallery-item">
                <h3>5</h3>
              </div>
              <div className="gallery-item">
                <h3>6</h3>
              </div>
            </Slider>
          </Col>
          <Col xs={24} sm={24} md={7} lg={7} className="gallery-info">
            Hello World
          </Col>
        </Row>
     </div>
    );
  }
}

export default Gallery;
