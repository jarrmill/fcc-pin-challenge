import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../Actions';
import { withRouter } from 'react-router-dom';
import Pin from "./Pin";
import _ from 'lodash';
import Masonry from 'react-masonry-component';

class UserPins extends Component {
  constructor(props){
    super(props);
    this.props.getAllPins();
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
  deletePin = (pinId) => {
    var headers = this.getAccessToken();
    this.props.deletePin(headers, pinId)
  };
  getAccessToken = () => {
    const { getAccessToken } = this.props.auth;
    const headers = { 'Authorization': `Bearer ${getAccessToken()}`}

    return headers;
  };
  sortUserPins = () => {
    if(_.isEmpty(this.props.pins)){
      console.log("No pins: ", this.props.pins);
      return [];
    }
    console.log("current pins: ", this.props.pins);
    console.log("current profile: " ,this.state.profile);
    var pinList = this.props.pins.map((pin, index) => {
      if (pin.userID === this.state.profile.sub){
        return <Pin data={pin}
                    key={index}
                    handleDelete={this.deletePin}
                    />
      } else{
        return null;
      }
    })
    return pinList;
  };
  r/*enderPins(){
    if(_.isEmpty(this.props.pins)){
      return <div>...loading</div>
    }
    let pinList = this.props.pins.map((pin, i) => {
      return <Pin data={pin}
                  key={i}
                  handleDelete={this.deletePin}
                  handleLike={this.likePin}
                  handleShare={this.sharePin}
                  />
    })
    return pinList
  }*/

  render() {
    return (
      <div>
        <Masonry>
          {this.sortUserPins()}
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
export default withRouter(connect(mapStateToProps, actions)(UserPins));
