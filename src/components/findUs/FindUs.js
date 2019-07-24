import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import './FindUs.scss';

const Marker = props => {
  return <div className="SuperAwesomePin"></div>
}
//18.522422, 73.843897
class FindUs extends Component {
  static defaultProps = {
    center: {
      lat: 18.522422,
      lng: 73.843897
    },
    zoom: 18
  };

  renderMarkers = (map, maps) => {
    let { center } = this.props;
    var contentString = "Hello Centro"
    let infowindow = new maps.InfoWindow({
      content: contentString
    });
    let marker = new maps.Marker({
      position: center,
      map,
      title: 'Hotel Centro'
    });
    marker.addListener('click', function() {
      infowindow.open(map, marker);
    });
  }

  render () {
    return (
      <div className="find-us-container">
        <div className="maxWidth centerDiv">

          <div className="heading">
            <h1>Find Us</h1>
            <hr />
          </div>

          <div className="row">
            <div className="map-container">
              <GoogleMapReact
                defaultCenter={this.props.center}
                defaultZoom={this.props.zoom}
                bootstrapURLKeys={{ key: 'AIzaSyCB40lktauxtzjNUw1G8tygU6auaaxvm6E' }}
                onGoogleApiLoaded={({map, maps}) => this.renderMarkers(map, maps)}
              >
              <Marker lat={this.props.center.lat} lng={this.props.center.lng} />
              </GoogleMapReact>
            </div>
            <div className="address">
              <p>1202/34, Shirole Road Off Apte Road, Shivaji Nagar, Pune, Maharastra 411004</p>
              <h2>085308 62222</h2>
              <h4><i className="fas fa-arrow-left"></i> We're here for you, always.</h4>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default FindUs;
