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
import './App.scss';

const logo = require('../static/images/centro-logo.png');
const loader = require('../static/images/loading.png');
const close = require('../static/images/close.png');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navItem: [
        { name: 'Stay Over', id:'#booking'},
        { name: 'Rooms', id:'#rooms'},
        { name: 'Restaurants', id:'#restaurants'},
        { name: 'Gallery', id:null},
        { name: 'Find Us', id:'#find-us'},
        { name: 'Our Promise', id:'#promises'},
        { name: 'Contact Us', id:'#contact'},
        { name: 'Instagram', id:null}
      ],
      visible: false,
      isLoading: true,
      fadeOut: true,
      scrolled: false,
      slideOut: false,
      slideOutAnimation: false,
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
      this.setState({ isLoading: false });
    }, 2000);

    setTimeout(() => {
      this.setState({ fadeOut: false });
    }, 1500);

    setTimeout(() => {
      this.setState({ slideOut: true });
    }, 5000);

    setTimeout(() => {
      this.setState({ slideOutAnimation: true });
    }, 4100)

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
                    <img className="hotel-logo" src={logo} width="100"/>
                  </Col>
                  <Col xs={4} sm={4} md={16} lg={14} align="right">
                    <div className="sidebar-drawer-icon">
                      <Icon onClick={() => this.showDrawer()} type="menu"/>
                    </div>
                  </Col>
                </Row>
                <div id="booking" style={{ height: '50px'}}></div>
                  <Book />
                <div id="rooms"></div>
                  <Rooms />
                <div id="restaurants"></div>
                  <Restaurants />
                <div id="find-us"></div>
                  <FindUs/>
                <div id="promises"></div>
                  <OurPromises />
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
                <Header />
              </div>
            ):(
              <React.Fragment>
                <div style={{ position: 'relative' }}>
                  <Row className={`navbar ${this.state.scrolled ? 'scrolled-nav' : 'not-scrolled-nav'}`} type="flex" justify="space-around" align="middle">
                    <Col xs={20} sm={20} md={8} lg={10}>
                      <img className="hotel-logo" src={logo} width="100"/>
                    </Col>
                    <Col xs={4} sm={4} md={16} lg={14} align="right">
                      <div className="sidebar-drawer-icon">
                        <Icon onClick={() => this.showDrawer()} type="menu"/>
                      </div>
                    </Col>
                  </Row>
                  <div id="booking" style={{ height: '50px'}}></div>
                    <Book />
                  <div id="rooms"></div>
                    <Rooms />
                  <div id="restaurants"></div>
                    <Restaurants />
                  <div id="find-us"></div>
                    <FindUs/>
                  <div id="promises"></div>
                    <OurPromises />
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
