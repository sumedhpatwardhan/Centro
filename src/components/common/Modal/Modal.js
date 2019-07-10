import React, { Component } from 'react';
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
    let { show, openModal, closeModal } = this.props;
    let showModalCSS = show ? "show-modal" : "hide-modal";
    return (
      <div className={`modal-container ${showModalCSS}`}>
        <div className="modal-content-holder">
          <div className="close-btn" onClick={() => closeModal()}> <i className="fas fa-times"></i> </div>
          <div className="gallery">
          <Slider
            asNavFor={this.state.nav2}
            ref={slider => (this.slider1 = slider)}
            className="primary-slider"
          >
            <div><h3>1</h3></div>
            <div><h3>2</h3></div>
            <div><h3>3</h3></div>
            <div><h3>4</h3></div>
            <div><h3>5</h3></div>
            <div><h3>6</h3></div>
          </Slider>
          <Slider
            asNavFor={this.state.nav1}
            ref={slider => (this.slider2 = slider)}
            slidesToShow={3}
            swipeToSlide={true}
            focusOnSelect={true}
            className="secondary-slider"
          >
            <div><h3>1</h3></div>
            <div><h3>2</h3></div>
            <div><h3>3</h3></div>
            <div><h3>4</h3></div>
            <div><h3>5</h3></div>
            <div><h3>6</h3></div>
          </Slider>
          </div>
        </div>
      </div>
    )
  }
}

export default Modal;
