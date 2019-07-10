import React, { Component } from 'react';
import Modal from '../common/Modal/Modal';
import './Restaurants.scss';

class Restaurants extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: [
        { name : 'prech' },
        { name : 'bloom' }
      ],
      showModal: false
    }
  }

  showModal = () => {
    this.setState({ showModal: true });
  }

  hideModal = () => {
    this.setState({ showModal: false });
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
                <div key={index} className={`menu-card menu-card-${menu.name}`} onClick={this.showModal}>
                  {menu.name}
                </div>
              );
            })}
          </div>

        </div>
        <Modal show={this.state.showModal} closeModal={this.hideModal}>

        </Modal>
      </div>
    );
  }
}

export default Restaurants;
