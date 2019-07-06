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
          <ul>
            {footer && footer.length > 0 && footer.map((link) => {
              return (
                <li>{link.name}</li>
              );
            })}
          </ul>
        </div>
      </footer>
    );
  }
}

export default Footer;
