import React from "react";
import PropTypes from 'prop-types';
import { BottomContainer, ProfileCT, InfoCT } from './splash_styled';
import { ProfilePic, UserName } from './splash_styled';

class PinBottom extends React.Component{
  render(){
    let data = this.props.data;
    return (
      <BottomContainer>
        <ProfileCT>
          <ProfilePic src={data.userImg} />
          <UserName href={`/viewpins?user=${data.userName}`}>{data.userName}</UserName>
        </ProfileCT>
        <InfoCT>
        </InfoCT>
      </BottomContainer>
    );
  }
}

PinBottom.propTypes = {
  data: PropTypes.object.isRequired,
}
export default PinBottom;
