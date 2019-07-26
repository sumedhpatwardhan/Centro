import React, { Component } from 'react'
import { Row, Col } from 'antd';
import './OurPromises.scss';

const namaste = require('../../static/images/promises/namaste.png');
const clean = require('../../static/images/promises/clean.png');
const beds = require('../../static/images/promises/beds.png');
const showers = require('../../static/images/promises/shower.png');
const wifi = require('../../static/images/promises/wifi.png');
const breakfast = require('../../static/images/promises/breakfast.png');
const location = require('../../static/images/promises/location.png');
const marketplace = require('../../static/images/promises/market.png');
const thoughtful = require('../../static/images/thoughtful.png');
const sustainability = require('../../static/images/sustainability.png');

class OurPromises extends Component {
  render () {
    return (
      <div className="promises-container">
        <div className="maxWidth centerDiv">

          <div className="heading">
            <h1>Our Promises</h1>
            <hr />
          </div>
        </div>

        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <Row type="flex" justify="space-around" align="middle" className="margin-bottom-20">
            <Col xs={24} sm={24} md={12} lg={12} className="col-padding">
              <Row type="flex" justify="space-around" align="middle">
                <Col span={6}>
                  <img src={namaste} width="50" />
                </Col>
                <Col span={18}>
                  <h3 className="blue-text">Heartfelt Hospitality</h3>
                  <p className="blue-text">“Guest is God”, so we’ll definitely treat you like one! From kids to the elders, we’ll make
                    sure everyone is as comfortable as possible.</p>
                </Col>
              </Row>
            </Col>
            <Col xs={24} sm={24} md={12} lg={12} className="col-padding blue-bg border-radius-5 padding-left">
              <Row type="flex" justify="space-around" align="middle">
                <Col span={18}>
                  <h3 className="white-text">Maximum Cleanliness</h3>
                  <p className="white-text">Our team of Magicians (a.k.a. housekeepers) are trained to consistently deliver a pleasant,
                    clean and super hygienic stay every time!</p>
                </Col>
                <Col span={6} align="right">
                  <img src={clean} width="50" />
                </Col>
              </Row>

            </Col>
          </Row>

          <Row type="flex" justify="space-around" align="middle" className="margin-bottom-20">
            <Col xs={24} sm={24} md={12} lg={12} className="col-padding">
              <Row type="flex" justify="space-around" align="middle">
                <Col span={6}>
                  <img src={beds} width="50" />
                </Col>
                <Col span={18}>
                  <h3 className="blue-text">Snooze Beds</h3>
                  <p className="blue-text">We spent a lot of sleepless nights ideating so you could have a great sleep! Our
                  SnoozeBeds (made for us exclusively) offer an 8 inch pocketed spring mattress with a
                  memory foam topped with our premium Softouch linen for that wonderful sinking feel.
                  Trust us, on our SnoozeBeds you will always feel like reaching for the snooze button.</p>
                </Col>
              </Row>
            </Col>
            <Col xs={24} sm={24} md={12} lg={12} className="col-padding">
              <Row type="flex" justify="space-around" align="middle">
                <Col span={18}>
                  <h3 className="blue-text">SuperShowers</h3>
                  <p className="blue-text">Need to feel wide awake for that meeting? Had a long day? Hop into our SuperShower!
                    Our walk-in over head rain showers will refresh you with the right temperature and
                    pressure of water for the best bath every time. We also have aromatherapy bath products
                    to take your bath experience to the next level!</p>
                </Col>
                <Col span={6} align="right">
                  <img src={showers} width="50" />
                </Col>
              </Row>
            </Col>
          </Row>

          <Row type="flex" justify="space-around" align="middle" className="yellow-bg margin-bottom-20 border-radius-5">
            <Col xs={24} sm={24} md={12} lg={12} className="col-padding padding-left">
              <Row type="flex" justify="space-around" align="middle">
                <Col span={6}>
                  <img src={wifi} width="50" />
                </Col>
                <Col span={18}>
                  <h3 className="blue-text">Free(aking) Fast Wi-fi</h3>
                  <p className="blue-text">FaceTime call with folks back home? Uploading a bunch of urgent work files? Streaming
                    the latest episode of your favourite TV show? Do all this and more on all your devices
                    uninterrupted! Say good bye to the loading indicator with our super fast internet available
                    on the house!</p>
                </Col>
              </Row>
            </Col>
            <Col xs={24} sm={24} md={12} lg={12} className="col-padding">
              <h3 className="blue-text">Technology</h3>
              <p className="blue-text">Along with super fast wifi, we have multiple universal charging points on both sides of the
                bed so you can stay plugged in throughout the night! Forgot your charger at home?
                We’ve got USB ports to charge and cables available to charge the most popular devices!
                Not really into talking on the phone? Say ‘What’s up?’ to us on WhatsApp instead!</p>
            </Col>
          </Row>

          <Row type="flex" justify="space-around" align="middle" className="margin-bottom-20">
            <Col xs={24} sm={24} md={12} lg={12} className="col-padding">
              <Row type="flex" justify="space-around" align="middle">
                <Col span={6}>
                  <img src={breakfast} width="50" />
                </Col>
                <Col span={18}>
                  <h3 className="blue-text">Tasty Breakfast</h3>
                  <p className="blue-text">We’re just like your mom, so we won’t let you go without a delicious and wholesome
                    breakfast made fresh every day!
                    Want a larger variety? Try our restaurants Perch or Bloom to satisfy any cravings that you
                    might have!</p>
                </Col>
              </Row>
            </Col>
            <Col xs={24} sm={24} md={12} lg={12} className="yellow-bg col-padding border-radius-5">
              <Row type="flex" justify="space-around" align="middle">
                <Col span={18}>
                  <h3 className="blue-text">Central location</h3>
                  <p className="blue-text">Located in the heart of the city, Centro is perfect to explore the city! Whether you want to
                    experience the old city with its by-lanes and beautiful architecture or go for a night out to
                    the hip Koregaon Park, nothing is more than a 15 minute cab ride away!</p>
                </Col>
                <Col span={6} align="right">
                  <img src={location} width="50" />
                </Col>
              </Row>
            </Col>
          </Row>

          <Row className="margin-bottom-20">
            <Col xs={24} sm={24} md={12} lg={12} className="blue-bg col-padding border-radius-5">
              <Row type="flex" justify="space-around" align="middle">
                <Col span={6}>
                  <img src={marketplace} width="50" />
                </Col>
                <Col span={18}>
                  <h3 className="white-text">24/7 Marketplace</h3>
                  <p className="white-text">Forgot something? Don’t worry! From reading glasses to diapers, we have everything
                    available for you in our 24/7 Marketplace.</p>
                </Col>
              </Row>
            </Col>
          </Row>

          <Row type="flex" justify="space-around" align="top" className="margin-bottom-20 detailed-promises">
            <Col xs={24} sm={24} md={12} lg={12} className="blue-bg col-padding border-radius-5 detailed-promises-col thoughtful">
              <div style={{ display: 'inline-block'}}>
                <h3 className="white-text">Thoughtful Design</h3>
                <hr />
              </div>
                <img src={thoughtful} width="50" />

              <div className="white-text">
              We’ve made sure our design is as clever as you are!
                <ol>
                  <li>An open wardrobe to save space so you can have more space.</li>
                  <li>Lots of hooks for you to hang your clothes, because we know you can’t be bothered with using the hanger!</li>
                  <li>A Smartdesk which is great for working, eating, putting your bag or your bum!</li>
                  <li>Tagged switches so you can quickly switch off that light above the door instead of
                    having to hunt for the right switch!</li>
                </ol>
              </div>
            </Col>
            <Col xs={24} sm={24} md={12} lg={12} className="yellow-bg col-padding border-radius-5 detailed-promises-col sustainability">
              <div style={{ display: 'inline-block'}}>
                <h3 className="blue-text">Sustainability</h3>
                <hr />
              </div>
                <img src={sustainability} width="50" />
              <div className="blue-text">
              We really care for the environment and we’ve tried to do our part to be more sustainable.
              <ol>
                <li>60% of the hotel’s power is generated via Solar energy right on our rooftop reducing our carbon footprint!</li>
                <li>We actively avoid using single use plastics, including water bottles and toiletries.
                  Water is provided in refillable glass bottles, while toiletries are available in refillable
                  dispensers!</li>
                <li>Each room has a key tag module installed so energy is consumed only when the room is occupied!</li>
                <li>All our bath products are eco-friendly and don’t cause damage to the environment!</li>
              </ol>
            </div>
            </Col>
          </Row>

        </div>
      </div>
    );
  }
}

export default OurPromises;
