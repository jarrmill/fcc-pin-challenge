import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../Actions';
import { withRouter } from 'react-router-dom';
import Pin from './Pin';
import FocusPin from './FocusPin';
import Masonry from 'react-masonry-component';
import Modal from 'react-modal';
import _ from 'lodash';

class Home extends Component {
  constructor(props){
    super(props);

    this.props.getAllPins();
    this.state = { isModalOpen : false, focusPinIndex: 0 }
  }
  componentWillMount() {
    this.setState({ profile: {} });
    const { userProfile, getProfile } = this.props.auth;
    if (!userProfile) {
      getProfile((err, profile) => {
        this.setState({ profile });
      });
    } else {
      this.setState({ profile: userProfile });
    }
  }

  logState = () => {
    console.log(this.props.pins);
  }
  renderPins(){
    if(_.isEmpty(this.props.pins)){
      return <div>...loading</div>
    }
    let pinList = this.props.pins.map((pin, i) => {
      return <Pin data={pin}
                  key={i}
                  index={i}
                  handleClick={this.clickPin}
                  handleDelete={this.deletePin}
                  handleLike={this.likePin}
                  handleShare={this.sharePin}
                  />
    })
    return pinList
  }
  renderPin(){
    if(_.isEmpty(this.props.pins)){
      return <div>...</div>
    };
    return <FocusPin data={this.props.pins[this.state.focusPinIndex]}
                closeModal={this.closeModal}
                handleLike={this.likePin}
                handleShare={this.sharePin}
                />
  }
  clickPin = ( index ) => {
    this.setState({ isModalOpen: true, focusPinIndex: index});
    console.log("Pin has been clicked");
  }
  closeModal = () => {
    this.setState({isModalOpen: false});
  }
  likePin = (pin) => {
    var headers = this.getAccessToken();
    this.props.likePin(headers, pin);
  }
  deletePin = (pinId) => {
    var headers = this.getAccessToken();
    this.props.deletePin(headers, pinId)
  };
  sharePin = (pin) => {
    var headers = this.getAccessToken();
    this.props.sharePin(headers, pin);
  }
  getAccessToken = () => {
    const { getAccessToken } = this.props.auth;
    const headers = { 'Authorization': `Bearer ${getAccessToken()}`}

    return headers;
  };

  render() {
    return (
      <div>
        <Masonry>
          {this.renderPins()}
        </Masonry>
        <Modal isOpen={this.state.isModalOpen} style={{ content: {
          "display": "flex",
          "align-items": "center",
          "justify-content":"center",
        }}}>
          {this.renderPin()}
        </Modal>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    pins: state.pins.pins,
  }
}
export default withRouter(connect(mapStateToProps, actions)(Home));
