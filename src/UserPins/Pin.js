import React from "react";
import PropTypes from 'prop-types';
import { PinContainer, PinImage } from './userpins_styled';
import PinBottom from './PinBottom';

const placeholder = require('../Assets/placeholder.png');

class Pin extends React.Component{
  constructor(props){
    super(props);

    this.state = { imgUrl: this.props.data.imgUrl }
  }
  onError(){
    this.setState({ imgUrl: placeholder});
  }
  render(){
    let data = this.props.data;
    console.log("img url: ", data.imgUrl);
    return (
      <PinContainer>
        <PinImage
          src={this.state.imgUrl}
          ref={img => this.img = img}
          onError={() => this.onError()}
          />
        <PinBottom
          data={data}
          handleDelete={this.props.handleDelete}
          />
      </PinContainer>
    );
  }
}

Pin.propTypes = {
  data: PropTypes.object.isRequired,
  handleDelete: PropTypes.func.isRequired,
}
export default Pin;
