import React, { Component } from 'react';
import { Icon, Row, Col } from 'antd';
import Slider from "react-slick";
import './Modal.scss';

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null
    };
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2
    });
  }

  render () {
    let { show, closeModal, children, images } = this.props;
    let showModalCSS = show ? "show-modal" : "hide-modal";
    return (
      <div className={`modal-container ${showModalCSS}`}>
        <div className="modal-header">
          <h2>{this.props.title}</h2>
          <div className="close-btn" onClick={() => closeModal()}> <Icon type="close" className="close-icon"/> </div>
        </div>
        <div className="modal-content-holder">
          <Row type="flex" justify="space-around" align="middle">
            <Col xs={24} sm={24} md={12} lg={12}>{images && images.length > 0 &&
              <div className="gallery">
                <Slider
                  asNavFor={this.state.nav2}
                  ref={slider => (this.slider1 = slider)}
                  className="primary-slider"
                >
                {images.map((img, index) => {
                  return (
                    <div className="main-slider-images" key={index}>
                      <img src={img} alt={this.props.title}/>
                    </div>
                  )})}
                </Slider>
            </div>
            }</Col>
            <Col xs={24} sm={24} md={12} lg={12}>
              {children}
            </Col>
          </Row>

        </div>
      </div>
    )
  }
}

export default Modal;
