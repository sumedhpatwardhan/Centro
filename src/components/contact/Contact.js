import React, { Component } from 'react';
import './Contact.scss';

const fb = require('../../static/images/Facebook.png');
const insta = require('../../static/images/Instagram.png');
const twitter = require('../../static/images/Twitter.png');
const linkedIn = require('../../static/images/LinkedIn.png');
const mail = require('../../static/images/Mail.png');

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      socialIcons: [fb, insta, twitter, linkedIn, mail]
    }
  }
  render () {
    let socialIcons = this.state.socialIcons ? this.state.socialIcons : [];

    return (
      <div className="contact-container">
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
      </div>
    );
  }
}

export default Contact;
