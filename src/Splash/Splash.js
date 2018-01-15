import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../Actions';
import { withRouter } from 'react-router-dom';
import Pin from './Pin';
import _ from 'lodash';
import Masonry from 'react-masonry-component';
import Modal from 'react-modal';
import FocusPin from './FocusPin';

class Splash extends Component {
  constructor(props){
    super(props);

    this.props.getAllPins();
    this.state = {isModalOpen: false, focusPinIndex: 0}
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
                  />
    })
    return pinList
  }
  clickPin = ( index ) => {
    this.setState({ isModalOpen: true, focusPinIndex: index});
    console.log("Pin has been clicked");
  }
  closeModal = () => {
    this.setState({isModalOpen: false});
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
export default withRouter(connect(mapStateToProps, actions)(Splash));
