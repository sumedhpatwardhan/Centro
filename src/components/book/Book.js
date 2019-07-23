import React, { Component } from 'react'
import { Button, DatePicker, Row, Col, InputNumber } from 'antd';
import sanitizeHtml from "sanitize-html";
import './Book.scss';

const namaste = require('../../static/images/amenities/hospitality.png');
const clean = require('../../static/images/amenities/cleanliness.png');
const beds = require('../../static/images/amenities/bed.png');
const showers = require('../../static/images/amenities/showers.png');
const wifi = require('../../static/images/amenities/wifi.png');
const breakfast = require('../../static/images/amenities/breakfast.png');
const location = require('../../static/images/amenities/location.png');
const marketplace = require('../../static/images/amenities/marketplace.png');
const down = require('../../static/images/scroll-down.png');

class Book extends Component {
  constructor(props) {
    super(props);
    this.props = {
      amenitiesData: [],
      startValue: null,
      endValue: null,
      endOpen: false,
    }
  }

  disabledStartDate = startValue => {
    const { endValue } = this.state;
    if (!startValue || !endValue) {
      return false;
    }
    return startValue.valueOf() > endValue.valueOf();
  };

  disabledEndDate = endValue => {
    const { startValue } = this.state;
    if (!endValue || !startValue) {
      return false;
    }
    return endValue.valueOf() <= startValue.valueOf();
  };

  onChange = (field, value) => {
    this.setState({
      [field]: value,
    });
  };

  onStartChange = value => {
    this.onChange('startValue', value);
  };

  onEndChange = value => {
    this.onChange('endValue', value);
  };

  handleStartOpenChange = open => {
    if (!open) {
      this.setState({ endOpen: true });
    }
  };

  handleEndOpenChange = open => {
    this.setState({ endOpen: open });
  };

  componentWillMount() {
    let amenities = [
      {
        name: `HeartFelt<br/>Hospitality`,
        img: namaste
      },
      {
        name: `Maximum<br/>Cleanliness`,
        img: clean
      },
      {
        name: `Snooze<br/>beds`,
        img: beds
      },
      {
        name: `Super<br/>Shower`,
        img: showers
      },
      {
        name: `Free<br/>Wifi`,
        img: wifi
      },
      {
        name: `Tasty<br/>Breakfast`,
        img: breakfast
      },
      {
        name: `Center<br/>Location`,
        img: location
      },
      {
        name: `24/7<br/>Marketplace`,
        img: marketplace
      }
    ]
    this.setState({ amenitiesData: amenities });
  }

  scrollToDiv = (id) => {
    document.querySelector(id).scrollIntoView({
      behavior: 'smooth'
    });
  }

  render () {
    let amenities = this.state.amenitiesData ? this.state.amenitiesData : [];
    let { startValue, endValue, endOpen} = this.state;
    return (
      <React.Fragment>
        <div className="book-container">
          <div className="maxWidth">

            <div className="heading">
              <h1>Let's set a date</h1>
            </div>

            <Row gutter={16} className="booking-form" type="flex" justify="space-around" align="middle">
              <Col xs={12} sm={12} md={5} lg={5}>
                <p className="form-label">Check In</p>
                <DatePicker
                  placeholder="Check In date"
                  size="large"
                  disabledDate={this.disabledStartDate}
                  format="DD-MM-YYYY"
                  value={startValue}
                  onChange={this.onStartChange}
                  onOpenChange={this.handleStartOpenChange}
                />
              </Col>
              <Col xs={12} sm={12} md={5} lg={5}>
                <p className="form-label">Check Out</p>
                <DatePicker
                  placeholder="Check Out date"
                  disabledDate={this.disabledEndDate}
                  format="DD-MM-YYYY"
                  value={endValue}
                  onChange={this.onEndChange}
                  open={endOpen}
                  onOpenChange={this.handleEndOpenChange}
                  size="large"
                />
              </Col>
              <Col xs={12} sm={12} md={5} lg={5}>
                <p className="form-label">Guests</p>
                <InputNumber size="large" placeholder="No of guests" min={1} max={100000} style={{ 'width' : '100%' }} onChange={this.onChange} />
              </Col>
              <Col xs={12} sm={12} md={5} lg={5}>
                <p className="form-label">Rooms</p>
                <InputNumber size="large" placeholder="No of rooms" min={1} max={100000} style={{ 'width' : '100%' }} onChange={this.onChange} />
              </Col>
              <Col xs={24} sm={24} md={4} lg={4}>
                <Button type="primary" className="book-now-btn" size="large">Book Now</Button>
              </Col>
            </Row>
          </div>
        </div>

        <div className="maxWidth amenities">
          <p className="amenities-heading">A warm bed, warm people and a chill vibe awaits you.</p>
          <Row className="amenities-container">
            {amenities && amenities.map((amenity, index) => {
              return (
                <Col key={index} xs={12} sm={12} md={3} lg={3} align="center" className="amenities-unit">
                  <img src={amenity.img} />
                  <p className="amenities-name"
                    dangerouslySetInnerHTML={{
                      __html: sanitizeHtml(amenity.name, {
                        allowedTags: ["br"],
                        allowedAttributes: []
                      })
                    }}
                  />
                </Col>
              )
            })}
          </Row>
          <p className="and-more" onClick={() => this.scrollToDiv('#promises')}>and more...</p>
          <div style={{ textAlign: 'center', cursor: 'pointer' }}>
            <img src={down} width="50" onClick={() => this.scrollToDiv('#rooms')}/>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Book;
