import React, { Component } from 'react';
import Modal from '../common/Modal/Modal';
import './Restaurants.scss';

const bloom = require('../../static/images/restaurants/bloom.png');
const perch = require('../../static/images/restaurants/perch.png');

class Restaurants extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: [
        { name : 'perch', imgUrl: perch },
        { name : 'bloom', imgUrl: bloom }
      ],
      showModal: false,
      modalType: 'prech'
    }
  }

  showModal = (name) => {
    this.setState({ modalType: name });
    if(name === 'perch') {
      this.setState({ modalColor: 'blue' })
    } else {
      this.setState({ modalColor: 'yellow' })
    }
    this.setState({ showModal: true });
    document.getElementsByTagName('body')[0].style.overflowY = "hidden";
  }

  hideModal = () => {
    this.setState({ showModal: false });
    document.getElementsByTagName('body')[0].style.overflowY = "scroll";
  }

  render () {
    let { menu, modalType } = this.state;
    return (
      <div className="restaurants-container">
        <div className="maxWidth">

          <div className="heading">
            <h1>Restaurants</h1>
            <hr />
          </div>

          <p className="tag">Take your pick, we guarantee it will not be easy to choose!</p>

          <div className="card-container">
            {menu && menu.map((menu, index) => {
              return (
                <div key={index} className={`menu-card menu-card-${menu.name}`} onClick={() => this.showModal(menu.name)}>
                  <img src={menu.imgUrl}/>
                </div>
              );
            })}
          </div>

        </div>
        <Modal show={this.state.showModal} closeModal={this.hideModal} modalColor={this.state.modalColor}>
          {modalType === 'perch' ? (
            <div className="perch-container">
              <img src={perch} />
              <p>Perch is a 24 hour vegetarian restaurant.<br/> From breakfast favourites like
              indori Poha and Pongal to a delicious all day menu with snacks, comfort food and proper khana
              (in case you're really hungry), we serve it all. We also stay open throughout the night
              (yup, you read it right!) so all you night owls will surely want to perch at perch 24/7!</p>
            </div>
          ):(
            <div className="bloom-container">
              <img src={bloom}/>
              <p>Bloom is an organic cafe, rooftop garden and community space all in one! With waffles, smoothie bowls,
              flatbreads, sandwiches, pastas and more on the menue, you'll surely have cravings everytime you think
              about bloom! The rooftop garden is much needed break for the hustle and bestie for your work, eat, meet
              friends, and just BLOOM!</p>
            </div>
          )}
        </Modal>
      </div>
    );
  }
}

export default Restaurants;
