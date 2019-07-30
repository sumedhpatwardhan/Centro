import React, { Component } from 'react';
import { Button } from 'antd';
import sanitizeHtml from "sanitize-html";
import Modal from '../common/Modal/Modal';
import roomInfo from './roomInfo';
import './Rooms.scss';

let cosy1 = require('../../static/images/rooms/cosy/img1.jpg');
let cosy2 = require('../../static/images/rooms/cosy/img2.jpg');
let cosy3 = require('../../static/images/rooms/cosy/img3.jpg');
let grand1 = require('../../static/images/rooms/grand/img1.jpg');
let grand2 = require('../../static/images/rooms/grand/img2.jpg');
let grand3 = require('../../static/images/rooms/grand/img3.jpg');
let grand4 = require('../../static/images/rooms/grand/img4.jpg');
let grand5 = require('../../static/images/rooms/grand/img5.jpg');
let superior1 = require('../../static/images/rooms/superior/img1.jpg');
let superior2 = require('../../static/images/rooms/superior/img2.jpg');
let superior3 = require('../../static/images/rooms/superior/img3.jpg');
let superior4 = require('../../static/images/rooms/superior/img4.jpg');

class Rooms extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rooms : [
        { name: 'Cosy', imgUrl: cosy1, images: [cosy1, cosy2, cosy3]},
        { name: 'Superior', imgUrl: superior1, images: [superior1, superior2, superior3, superior4]},
        { name: 'Grand', imgUrl: grand1, images: [grand1, grand2, grand3, grand4, grand5]}
      ],
      showModal: false,
      roomType: 'Cosy',
      roomImages: [],
      modalColor: 'yellow',
      showAmenities: false
    }
    document.body.style.overflowY = "scroll";
  }

  showModal = (room, index) => {
    let { rooms } = this.state;
    if(room === 'Cosy') {
      this.setState({ modalColor: 'pink' })
    } else if (room === "Superior") {
      this.setState({ modalColor: 'blue' })
    } else {
      this.setState({ modalColor: 'yellow' })
    }
    this.setState({ showModal: true, roomType : room, roomImages: rooms[index].images });
    document.body.style.overflowY = "hidden";
  }

  hideModal = () => {
    this.setState({ showModal: false, showAmenities: false });
    document.body.style.overflowY = "scroll";
  }

  render () {
    let { rooms, roomType } = this.state;
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
                <div className={`room-card room-card-${index}`} onClick={() => this.showModal(room.name, index)} key={index}>
                  <p className="card-title">{room.name}</p>
                  <div className="image-holder">
                    <img src={room.imgUrl} alt={room.name}/>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
        <Modal show={this.state.showModal}
          closeModal={this.hideModal}
          title={roomType}
          images={this.state.roomImages}
          modalColor={this.state.modalColor}>
          <p className="about-room"
            dangerouslySetInnerHTML={{
                __html: sanitizeHtml(roomInfo[roomType].desc, {
                    allowedTags: ["p", "strong", "b", "br","a", "li", "h2", "h3", "ul"],
                    allowedAttributes: []
                })
            }}
          />
        {!this.state.showAmenities &&
          <Button className={`${roomType}-amenities-button amentites-toggle-btn`} onClick={() => this.setState({ showAmenities: true })}>Amenities</Button>
        }
        {this.state.showAmenities &&
          <p className={`about-room ${roomType}-amenities-background`}
            dangerouslySetInnerHTML={{
                __html: sanitizeHtml(roomInfo[roomType].amenities, {
                    allowedTags: ["p", "strong", "b", "br","a", "li", "h2", "h3", "ul"],
                    allowedAttributes: []
                })
            }}
          />
        }
        </Modal>
      </div>
    );
  }
}

export default Rooms;
