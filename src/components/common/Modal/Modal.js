import React, { Component } from 'react';
import { Icon, Row, Col } from 'antd';
import Slider from "react-slick";
import './Modal.scss';

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

let img1 = require('../../../static/images/gallery/img5.jpg');

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      defaultImg: [img1]
    };
  }

  render () {
    const settings = {
      dots: false,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 1,
      autoplay: true,
      speed: 700,
      swipeToSlide: true,
      nextArrow: <NextArrow/>,
      prevArrow: <PreviousArrow/>
    };
    let { defaultImg } = this.state;
    let { show, closeModal, children, images } = this.props;
    let showModalCSS = show ? "show-modal" : "hide-modal";
    let modalColor = this.props.modalColor ? this.props.modalColor : 'yellow'
    return (
      <div className={`modal-container ${showModalCSS}`}>
        <div className={`modal-content-holder modal-${modalColor}`}>
          <div className="close-btn" onClick={() => closeModal()}>
            <Icon type="close" className={`close-icon ${modalColor === 'blue' || modalColor === 'pink' ? 'yellow-text' : 'blue-text'}`}/>
          </div>
          <Row type="flex" justify="space-around" align="top" className="grid-content">
            <Col xs={24} sm={24} md={14} lg={14}>
              <div className="gallery">
                {images ? (
                  <Slider {...settings}>
                     {images.map((img, index) => {
                      return (
                        <div className="gallery-item" key={index}>
                          <img src={img} alt={this.props.title}/>
                        </div>
                      )})}
                  </Slider>
                ) : (
                  <Slider {...settings}>
                    {defaultImg && defaultImg.map((img, index) => {
                      return (
                        <div className="gallery-item" key={index}>
                          <img src={img} alt={this.props.title}/>
                        </div>
                      )})}
                  </Slider>
                )}
            </div>
            </Col>
            <Col xs={24} sm={24} md={10} lg={10}>
              <div className={`${modalColor === 'blue' || modalColor === 'pink' ? 'yellow-text' : 'blue-text'}`}>
                {children}
              </div>
            </Col>
          </Row>

        </div>
      </div>
    )
  }
}

export default Modal;
