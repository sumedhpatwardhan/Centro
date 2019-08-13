import React, { Component } from 'react';
import { Row, Col } from 'antd';
import Slider from "react-slick";
import './Header.scss';

const icon = require('../../static/images/centro-icon.png');
const logo = require('../../static/images/centro-logo.png');
const logoWhite = require('../../static/images/logo-white.png');
const yellowlogo = require('../../static/images/logo-yellow.png');
const namastay = require('../../static/images/namastay.png');
const down = require('../../static/images/scroll-down.png');
const banner1 = require('../../static/images/banner1.jpeg');
const banner2 = require('../../static/images/banner2.jpeg');
const banner3 = require('../../static/images/banner3.jpeg');

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageData: [banner1, banner2, banner3],
    }
  }

  scrollToDiv = () => {
    document.querySelector('#booking').scrollIntoView({
      behavior: 'smooth'
    });
  }

  render () {
    let { imageData } = this.state;
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 1,
      autoplay: true,
      autoplaySpeed: 1000,
      speed: 500,
      arrows: false,
      pauseOnHover: false,
      cssEase: 'linear'
    };
    if(this.props.isMobile) {
      return (
        <div className="header-container" style={{ position: `${this.props.isMobile ? 'relative' : 'absolute'}`}}>
          <Row type="flex" justify="space-around" align="middle">
            <Col xs={24} sm={12} md={12} lg={12} order={1} align="right" className="taglines-container">
              <div className="taglines">
                <img src={namastay} className="namaste"/>
                <p className="welcome-to">Welcome to</p>
                <img src={logoWhite} className="centro-logo"/>
                <p className="tag">The hotel that's smart, <br /> located in the city's heart!</p>
              </div>
            </Col>
            <Col xs={24} sm={12} md={12} lg={12} align="center" order={2} className="hide-in-mobile">
              <img src={yellowlogo} className="centro-icon"/>
            </Col>
          </Row>
        </div>
      );
    } else {
      return (
        <div className="banner-image-holder">
          {imageData &&
            <Slider {...settings}>
              {imageData.map((image, index) => {
                return (
                  <img src={image} key={index} className="banner-image"/>
                )
              })}
            </Slider>
          }
        </div>
      )
    }
  }
}

export default Header;
