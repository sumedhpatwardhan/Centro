import React, { Component } from 'react'
import { Icon, Row, Col, Button } from 'antd';
import Slider from "react-slick";
import './Gallery.scss';

let img1 = require('../../static/images/gallery/img1.jpg');
let img2 = require('../../static/images/gallery/img2.jpg');
let img3 = require('../../static/images/gallery/img3.jpg');
let img4 = require('../../static/images/gallery/img4.jpg');
let img5 = require('../../static/images/gallery/img5.jpg');
let img6 = require('../../static/images/gallery/img6.jpg');
let img7 = require('../../static/images/gallery/img7.jpg');

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
  constructor(props) {
    super(props);
    this.state = {
      img: [img1, img2, img3, img4, img5, img6, img7]
    }
  }
  addHyperLink = (id) => {
    if(id) {
      document.querySelector(id).scrollIntoView({
        behavior: 'smooth'
      });
    }
  }

  render () {
    let img = this.state.img ? this.state.img : null;
    const settings = {
      dots: false,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 1,
      autoplay: true,
      speed: 1000,
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
          <Col xs={24} sm={24} md={12} lg={12}>
            {img &&
              <Slider {...settings}>
                {img && img.map((img, index) => {
                  return (
                    <div className="gallery-item" key={index}>
                      <img src={img} />
                    </div>
                  )
                })}
              </Slider>
            }
          </Col>
          <Col xs={24} sm={24} md={7} lg={7} className="gallery-info">
            <h1 className="tag-text">What looks good on screen, looks better in person!</h1>
            <Button type="primary" className="gallery-book-now-btn" size="large"
              onClick={() => this.addHyperLink('#booking')}>Book Now</Button>
          </Col>
        </Row>
     </div>
    );
  }
}

export default Gallery;
