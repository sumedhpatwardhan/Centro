import React, { Component } from 'react';
import Modal from '../common/Modal/Modal';
import './Rooms.scss';

class Rooms extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rooms : [
        { name: 'Cosy', },
        { name: 'Superior', },
        { name: 'Grand', }
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
    let { rooms } = this.state;

    return (
      <div className="rooms-container">
        <div className="maxWidth">

          <div className="heading">
            <h1>Rooms</h1>
            <hr />
          </div>
          <p className="tag">For the singleton or the family, <br />for the wanderer or the entrepreneur. <br />We've got you covered!</p>

          <div className="card-holders">
            {rooms && rooms.map((room, index) => {
              return (
                <div className={`room-card room-card-${index}`} onClick={this.showModal}>
                  <p className="card-title">{room.name}</p>
                  <div className="image-holder"></div>
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

export default Rooms;
