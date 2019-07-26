import React, { Component } from 'react';
import axios from 'axios';
import { Row, Col, Button, Icon } from 'antd';
import './Instagram.scss';

const insta = require('../../static/images/Instagram.png');

class Instagram extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }
  componentDidMount() {
    axios.get('https://www.instagram.com/centrohotelsin/?__a=1')
    .then((res) => {
      if(res && res.status === 200) {
        if(res.data &&
          res.data.graphql &&
          res.data.graphql.user &&
          res.data.graphql.user.edge_owner_to_timeline_media &&
          res.data.graphql.user.edge_owner_to_timeline_media.edges
        ){
          let data = this.processInstaData(res.data.graphql.user.edge_owner_to_timeline_media.edges);
          this.setState({ data });
        }
      }
    })
  }

  processInstaData = (arr) => {
    let imgArr = []
    if(arr && arr.length > 0) {
      arr.forEach(data => {
        if(data.node && Object.keys(data.node).length > 0) {
          if(imgArr.length < 8) {
            let obj = {
              shortcode: data.node.shortcode,
              img: data.node.thumbnail_src,
              caption: this.renderCaption(data.node)
            }
            imgArr.push(obj)
          }
        }
      })
    }
    return imgArr;
  }

  renderCaption = (data) => {
    // console.log(data.edge_media_to_caption);
    // console.log(Object.keys(data.edge_media_to_caption).length > 0);
    // console.log(data.edge_media_to_caption.edges);
    // console.log(data.edge_media_to_caption.edges[0]);
    // console.log(data.edge_media_to_caption.edges[0].node);
    if(data &&
      data.edge_media_to_caption &&
      Object.keys(data.edge_media_to_caption).length > 0 &&
      data.edge_media_to_caption.edges &&
      data.edge_media_to_caption.edges[0] &&
      data.edge_media_to_caption.edges[0].node &&
      data.edge_media_to_caption.edges[0].node.text && data.edge_media_to_caption.edges[0].node.text !== ""
    ) {
      return data.edge_media_to_caption.edges[0].node.text.substring(0, 80)+'...';
    } else {
      return null;
    }
  }

  openInstaUrl = (shortCode) => {
    let url = `https://www.instagram.com/p/${shortCode}/`;
    window.open(url, '_blank');
  }

  render () {
    let data = this.state.data ? this.state.data : null;
    return (
      <div className="instagram-container">
        <div className="heading maxWidth">
          <h1>Instagram</h1>
          <hr />
        </div>
        <Row className="instagram-item-container">
          {data && data.map((img, index) => {
            return (
              <Col
                key={index}
                xs={24}
                sm={24}
                lg={6}
                md={6}
                className="instagram-items"
                >
                <img
                  src={img.img}
                  className="insta-images"
                  onClick={() => {this.openInstaUrl(img.shortcode)}}
                />
                {img.caption &&
                  <div className="caption-container">
                    <p className="caption">{img.caption}</p>
                  </div>
                }
              </Col>
            )
          })}
          <div style={{ textAlign: 'center' }}>
            {data && data.length <= 8 &&
              <Button className="open-insta-btn"
                onClick={() => window.open('https://www.instagram.com/centrohotelsin/', '_blank')}>
                <Icon type="instagram" className="insta-icon"/>
                Open Instagram
              </Button>
            }
          </div>
        </Row>
      </div>
    );
  }
}

export default Instagram;
