import React, { Component } from 'react';
import { Row, Col } from 'antd';
import './Header.scss';

const icon = require('../../static/images/centro-icon.png');
const logo = require('../../static/images/centro-logo.png');
const namastay = require('../../static/images/namastay.png');
const down = require('../../static/images/scroll-down.png');

class Header extends Component {
  scrollToDiv = () => {
    document.querySelector('#booking').scrollIntoView({
      behavior: 'smooth'
    });
  }
  render () {
    return (
      <div className="header-container" style={{ position: `${this.props.isMobile ? 'relative' : 'absolute'}`}}>
        <Row type="flex" justify="space-around" align="middle">
          <Col xs={24} sm={12} md={12} lg={12} order={1} align="right" className="taglines-container">
            <div className="taglines">
              <img src={namastay} className="namaste"/>
              <p className="welcome-to">Welcome to</p>
              <img src={logo} />
              <p className="tag">The hotel that's smart, <br /> located in the city's heart!</p>
            </div>
          </Col>
          <Col xs={24} sm={12} md={12} lg={12} align="center" order={2} className="hide-in-mobile">
            <img src={icon} className="centro-icon"/>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Header;
