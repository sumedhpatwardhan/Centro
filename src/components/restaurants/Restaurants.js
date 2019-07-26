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
      showModal: false
    }
  }

  showModal = (name) => {
    if(name === 'perch') {
      this.setState({ modalColor: 'yellow' })
    } else {
      this.setState({ modalColor: 'blue' })
    }
    this.setState({ showModal: true });
    document.getElementsByTagName('body')[0].style.overflowY = "hidden";
  }

  hideModal = () => {
    this.setState({ showModal: false });
    document.getElementsByTagName('body')[0].style.overflowY = "scroll";
  }

  render () {
    let { menu } = this.state;

    return (
      <div className="restaurants-container">
        <div className="maxWidth">

          <div className="heading">
            <h1>Restaurants</h1>
            <hr />
          </div>

          <p className="tag">Take your pick, we guarantee it will<br /> not be easy to choose!</p>

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

        </Modal>
      </div>
    );
  }
}

export default Restaurants;
