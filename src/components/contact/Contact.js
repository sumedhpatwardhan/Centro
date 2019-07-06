import React, { Component } from 'react';
import './Contact.scss';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reservation: [
        "Modify/Cancel", "Retrieve Hotel Bill", "Customer Service"
      ],
      explore: [
        "All Inclusive Resorts", "Gift Cards"
      ]
    }
  }
  render () {
    let reservation = this.state.reservation ? this.state.reservation : [];
    let explore = this.state.explore ? this.state.explore : [];

    return (
      <div className="contact-container">
        <div className="maxWidth">
          <div className="main-row">
            <div className="git">
              <h2 className="title">Get in touch</h2>
              <div className="git-address">
                <p style={{ 'margin-bottom': '10px'}}>ADDRESS:</p>
                1202/34, Shirole Road Off Apte Road, Shivaji Nagar, Pune, Maharastra 411004
              </div>
              <p className="git-phone">PHONE: 085308 62222</p>
            </div>
            <div className="cwc">
              <h2 className="title">Connect with Centro</h2>
              <div className="sub-row">
                <div className="reservation">
                  <p>reservations</p>
                  {reservation && reservation.length > 0 && reservation.map((res) => {
                    return <li>{res}</li>
                  })}
                </div>
                <div className="explore">
                  <p>explore more</p>
                    {explore && explore.length > 0 && explore.map((explore) => {
                      return <li>{explore}</li>
                    })}
                </div>
              </div>

              <div className="social-footer">
                
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
