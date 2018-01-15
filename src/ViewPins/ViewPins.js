import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../Actions';
import { withRouter } from 'react-router-dom';
import queryString from 'query-string';
import _ from 'lodash';
import Pin from './Pin';
import Masonry from 'react-masonry-component';

class ViewPins extends Component {
  constructor(props){
    super(props);
    this.props.getAllPins();

    this.state = { user: queryString.parse(this.props.location.search).user}
  }
  componentWillMount() {
    const { isAuthenticated } = this.props.auth;

    if (isAuthenticated()){
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
  }
  renderUserPins = () => {
    if(_.isEmpty(this.props.pins)){
      console.log("No pins: ", this.props.pins);
      return [];
    }
    var pinList = this.props.pins.map((pin, index) => {
      console.log("current pin name: ", pin.userName);
      console.log("does match? ", this.state.user);
      console.log("current profile: " ,this.state.user);
      if (pin.userName === this.state.user){
        return <Pin data={pin}
                    key={index}
                    handleLike={this.likePin}
                    handleShare={this.sharePin}
                    />
      }
      return null;
    })
    return pinList;
  };
  likePin = (pin) => {
    if(this.state.profile){
      var headers = this.getAccessToken();
      this.props.likePin(headers, pin);
    } else {
      this.props.auth.login();
    }
  }
  sharePin = (pin) => {
    if(this.state.profile){
      var headers = this.getAccessToken();
      this.props.sharePin(headers, pin);
    } else{
      this.props.auth.login();
    }
  }
  getAccessToken = () => {
    console.log("Profile: ", this.state.profile);
    if(this.state.profile !== {}){
      const { getAccessToken } = this.props.auth;
      const headers = { 'Authorization': `Bearer ${getAccessToken()}`}

      return headers;
    }
  };
  render() {
    return (
      <div>
        <p>{this.state.user}</p>
        <Masonry>
          {this.renderUserPins()}
        </Masonry>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    pins: state.pins.pins,
  }
}
export default withRouter(connect(mapStateToProps, actions)(ViewPins));
