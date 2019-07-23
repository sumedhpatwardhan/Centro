import React, { Component } from 'react';
import './Footer.scss';

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      footer: [
        { name: 'Privacy Policy' },
        { name: 'Terms & Conditions'},
        { name: 'Security & Safety'}
      ]
    }
  }
  render () {
    let footer = this.state.footer ? this.state.footer : [];
    return (
      <footer>
        <div className="maxWidth">
          <p className="made-with">Made with love in Pune</p>
        </div>
      </footer>
    );
  }
}

export default Footer;
