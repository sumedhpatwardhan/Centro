import React, { Component } from 'react';
import { Input, Row, Col } from 'antd';
import './Contact.scss';

const fb = require('../../static/images/Facebook.png');
const insta = require('../../static/images/Instagram.png');
const twitter = require('../../static/images/Twitter.png');
const linkedIn = require('../../static/images/LinkedIn.png');
const mail = require('../../static/images/Mail.png');
const close = require('../../static/images/close.png');
const { TextArea } = Input;

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      socialIcons: [fb, insta, twitter, linkedIn, mail],
      slide: false
    }
  }
  render () {
    let socialIcons = this.state.socialIcons ? this.state.socialIcons : [];
    return (
      <div className="contact-container">
        <h1 className="h-d-w-d" onClick={() => this.setState({ slide: true })}>How did we do?</h1>
        <div className="maxWidth">
          <div className="main-row">
            <div className="git">
              <h2 className="title">Get in touch</h2>
              <p className="git-email">EMAIL: hello@centrohotels.in</p>
              <p className="git-phone">PHONE: 085308 62222</p>
              <div className="git-address">
                <p style={{ 'marginBottom': '10px'}}>ADDRESS:</p>
                1202/34, Shirole Road Off Apte Road, Pune, Maharastra 411004
              </div>
            </div>
            <div className="cwc">
              <h2 className="title">Connect with Centro</h2>
              <div className="social-icons">
                {socialIcons && socialIcons.map((icons, index) => {
                  return <img src={icons} key={index} />
                })}
              </div>
              <p className="legal-links">Privacy Policy</p>
              <p className="legal-links">Terms & Conditions</p>
            </div>
          </div>
        </div>

        <div className="hdwd-mobile-form">
          <Row gutter={16}>
            <Col xs={24} sm={24} md={8} lg={8}>
              <label>NAME</label>
              <Input autosuggest="off"/>
            </Col>
            <Col xs={24} sm={24} md={8} lg={8}>
              <label>E-MAIL ID</label>
              <Input autosuggest="off"/>
            </Col>
            <Col xs={24} sm={24} md={8} lg={8}>
              <label>PHONE NO</label>
              <Input autoComplete="off"/>
            </Col>
          </Row>
          <label style={{ fontSize: '18px' }}>
            We're smart so we know there's always room for improvement, so let us know how did we did!
          </label>
          <TextArea rows={2} />
          <label style={{ fontSize: '18px' }}>
            Any other enquiries?
          </label>
          <TextArea rows={2} />
        </div>

        <div className={`hdwd-form ${this.state.slide ? 'hdwd-form-slide-in' : 'hdwd-form-slide-out'}`}>
          <div style={{ textAlign: 'right' }}>
            <img src={close} className="close-btn" onClick={() => this.setState({ slide: false })}/>
          </div>
          <Row gutter={16}>
            <Col xs={24} sm={24} md={8} lg={8}>
              <label>NAME</label>
              <Input autosuggest="off"/>
            </Col>
            <Col xs={24} sm={24} md={8} lg={8}>
              <label>E-MAIL ID</label>
              <Input autosuggest="off"/>
            </Col>
            <Col xs={24} sm={24} md={8} lg={8}>
              <label>PHONE NO</label>
              <Input autoComplete="off"/>
            </Col>
          </Row>
          <label style={{ fontSize: '16px', marginTop:5, marginBottom: 0 }}>
            We're smart so we know there's always room for improvement, so let us know how did we did!
          </label>
          <TextArea rows={2}/>
          <label style={{ fontSize: '16px', marginBottom: 0 }}>
            Any other enquiries?
          </label>
          <TextArea rows={2} />
        </div>
      </div>
    );
  }
}

export default Contact;
