import React, { Component } from 'react';
import { Row, Col, Drawer, Icon } from 'antd';
import FindUs from '../components/findUs/FindUs';
import Footer from '../components/footer/Footer';
import Contact from '../components/contact/Contact';
import Rooms from '../components/rooms/Rooms';
import Restaurants from '../components/restaurants/Restaurants';
import Book from '../components/book/Book';
import Header from '../components/header/Header';
import OurPromises from '../components/promises/OurPromises';
import Gallery from '../components/gallery/Gallery';
import Instagram from '../components/instagram/Instagram';
import './App.scss';

const logo = require('../static/images/centro-logo.png');
const logoWhite = require('../static/images/logo-white.png');
const loader = require('../static/images/loading.png');
const close = require('../static/images/close.png');
const menu = require('../static/images/menu.png');
const pinkMenu = require('../static/images/logo-pink.png');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navItem: [
        { name: 'Stay Over', id:'#booking'},
        { name: 'Rooms', id:'#rooms'},
        { name: 'Restaurants', id:'#restaurants'},
        { name: 'Gallery', id: '#gallery'},
        { name: 'Find Us', id:'#find-us'},
        { name: 'Our Promise', id:'#promises'},
        { name: 'Instagram', id: '#instagram'},
        { name: 'Contact Us', id:'#contact'}
      ],
      visible: false,
      slideOut: true,
      isMobile: false
    }
  }

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  isMobile = () => {
    if(navigator) {
      if( navigator.userAgent.match(/Android/i)
       || navigator.userAgent.match(/webOS/i)
       || navigator.userAgent.match(/iPhone/i)
       || navigator.userAgent.match(/iPad/i)
       || navigator.userAgent.match(/iPod/i)
       || navigator.userAgent.match(/BlackBerry/i)
       || navigator.userAgent.match(/Windows Phone/i)
       ){
          this.setState({ isMobile: true });
        }
       else {
          this.setState({ isMobile: false });
        }
    }
  }

  onClose = () => {
    this.setState({
      visible: false,
    }, () => {
      if(window) {
        document.getElementsByClassName('ant-drawer-content-wrapper')[0].style.transform = "translateX(1200%)";
      }
    });
  };

  componentDidMount() {
    this.isMobile();
    let { isLoading } = this.state;
    setTimeout(() => {
      this.setState({ slideOut: true });
    }, 3300);
    if(window) {
      window.addEventListener('scroll', () => {
       if(window.scrollY === 0){
         this.setState({ scrolled: false });
       } else {
         this.setState({ scrolled: true });
       }
     });
   }
 }

  addHyperLink = (id) => {
    this.onClose();
    if(id) {
      document.querySelector(id).scrollIntoView({
        behavior: 'smooth'
      });
    }
  }

  render() {
    let { navItem, isLoading, scrolled, slideOut, slideOutAnimation, isMobile } = this.state;
    if(isLoading) {
      return (
        <div className={`page-loading`}>
          <img src={loader} className={`loader-image ${this.state.fadeOut ? 'fadeIn' : 'fadeOut'}`}/>
        </div>
      );
    } else {
      return (
        <React.Fragment>
        {isMobile ? (
          <div className="App">
            <Header isMobile={isMobile}/>
              <div style={{ position: 'relative' }}>
                <Row className={`navbar ${this.state.scrolled ? 'scrolled-nav' : 'not-scrolled-nav'}`} type="flex" justify="space-around" align="middle">
                  <Col xs={20} sm={20} md={8} lg={10}>
                    <img className="hotel-logo" src={`${this.state.scrolled ? logo : logoWhite}`} width="100"/>
                  </Col>
                  <Col xs={4} sm={4} md={16} lg={14} align="right">
                    <div className="sidebar-drawer-icon">
                      {this.state.visible ? (
                        <img src={pinkMenu} onClick={() => this.onClose()} width="35" />
                      ) : (
                        <img src={menu} onClick={() => this.showDrawer()} width="30" />
                      )}
                    </div>
                  </Col>
                </Row>
                <div id="booking" style={{ height: '50px'}}></div>
                  <Book />
                <div id="rooms"></div>
                  <Rooms />
                <div id="restaurants"></div>
                  <Restaurants />
                <div id="gallery"></div>
                  <Gallery/>
                <div id="find-us"></div>
                  <FindUs/>
                <div id="promises"></div>
                  <OurPromises />
                <div id="instagram"></div>
                  <Instagram/>
                <div id="contact"></div>
                  <Contact />
              <Footer />
              </div>

              <Drawer
                className="menu-drawer"
                placement="right"
                closable={false}
                onClose={this.onClose}
                visible={this.state.visible}
              >
              <p style={{ textAlign: 'right' }}>
                <img src={close} className="close-btn" onClick={() => this.onClose()}/>
              </p>
              {navItem && navItem.map((item, index) => {
                return (<p key={index} onClick={() => this.addHyperLink(item.id)}>{item.name}</p>);
              })}
              </Drawer>
          </div>
        ) : (
          <div className="App">
            {!slideOut ? (
              <div className={`${slideOutAnimation ? 'slideIn': 'slideOut'}`}>
                <Header isMobile={isMobile}/>
              </div>
            ):(
              <React.Fragment>
                <div style={{ position: 'relative' }}>
                  <Row className={`navbar ${this.state.scrolled ? 'scrolled-nav' : 'not-scrolled-nav'}`} type="flex" justify="space-around" align="middle">
                    <Col xs={20} sm={20} md={8} lg={10}>
                      {!this.state.scrolled && (<img className="hotel-logo" src={logo} width="100"/>)}
                    </Col>
                    <Col xs={4} sm={4} md={16} lg={14} align="right">
                      <div className="sidebar-drawer-icon">
                        {this.state.visible ? (
                          <img src={pinkMenu} onClick={() => this.onClose()} width="35" />
                        ) : (
                          <img src={menu} onClick={() => this.showDrawer()} width="30" />
                        )}
                      </div>
                    </Col>
                  </Row>
                  <div id="booking" style={{ height: '50px'}}></div>
                    <Book />
                  <div id="rooms"></div>
                    <Rooms />
                  <div id="restaurants"></div>
                    <Restaurants />
                  <div id="gallery"></div>
                    <Gallery/>
                  <div id="find-us"></div>
                    <FindUs/>
                  <div id="promises"></div>
                    <OurPromises />
                  <div id="instagram"></div>
                    <Instagram/>
                  <div id="contact"></div>
                    <Contact />
                <Footer />
                </div>

                <Drawer
                  className="menu-drawer"
                  placement="right"
                  closable={false}
                  onClose={this.onClose}
                  visible={this.state.visible}
                >
                <p style={{ textAlign: 'right' }}>
                  <img src={close} className="close-btn" onClick={() => this.onClose()}/>
                </p>
                {navItem && navItem.map((item, index) => {
                  return (<p key={index} onClick={() => this.addHyperLink(item.id)}>{item.name}</p>);
                })}
                </Drawer>
              </React.Fragment>
            )}
        </div>
        )}
        </React.Fragment>
      );
    }
  }
}

export default App;
