import React, { Component } from 'react';
import { Row, Col } from 'antd';
import './Instagram.scss';

class Instagram extends Component {
  render () {
    return (
      <div className="instagram-container maxWidth">
        <div className="heading">
          <h1>Instagram</h1>
          <hr />
        </div>
        <Row className="instagram-item-container">
          <Col xs={24} sm={24} lg={6} md={6} className="instagram-items"></Col>
          <Col xs={24} sm={24} lg={6} md={6} className="instagram-items"></Col>
          <Col xs={24} sm={24} lg={6} md={6} className="instagram-items"></Col>
          <Col xs={24} sm={24} lg={6} md={6} className="instagram-items"></Col>
          <Col xs={24} sm={24} lg={6} md={6} className="instagram-items"></Col>
          <Col xs={24} sm={24} lg={6} md={6} className="instagram-items"></Col>
          <Col xs={24} sm={24} lg={6} md={6} className="instagram-items"></Col>
          <Col xs={24} sm={24} lg={6} md={6} className="instagram-items"></Col>
        </Row>
      </div>
    );
  }
}

export default Instagram;
