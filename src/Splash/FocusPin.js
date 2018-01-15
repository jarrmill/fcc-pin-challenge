import React from "react";
import PropTypes from 'prop-types';
import { FocusPinContainer, PinImage, CloseModal } from '../Home/home_styled';
import PinBottom from './PinBottom';

const placeholder = require('../Assets/placeholder.png');

class FocusPin extends React.Component{
  constructor(props){
    super(props);

    this.state = { imgUrl: this.props.data.imgUrl }
  }
  onError(){
    this.setState({ imgUrl: placeholder});
  }
  render(){
    let data = this.props.data;
    return (
      <FocusPinContainer>
        <PinImage
          onClick={() => this.props.handleClick(data)}
          src={this.state.imgUrl}
          ref={img => this.img = img}
          onError={() => this.onError()}
          />
        <PinBottom
          data={data}
          />
        <CloseModal onClick={() => this.props.closeModal()}> X</CloseModal>
      </FocusPinContainer>
    );
  }
}

FocusPin.propTypes = {
  data: PropTypes.object.isRequired,
  closeModal: PropTypes.func.isRequired,
  handleLike: PropTypes.func.isRequired,
  handleShare: PropTypes.func.isRequired,
}
export default FocusPin;
