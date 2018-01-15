import React from "react";
import PropTypes from 'prop-types';
import { BottomContainer, ProfileCT, InfoCT } from './userpins_styled';
import { DeleteBtn, ProfilePic, UserName } from './userpins_styled';

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
          <DeleteBtn
            onClick={() => this.props.handleDelete(data._id)}>
             <i className="fa fa-trash" ariaHidden="true"></i>
          </DeleteBtn>
        </InfoCT>
      </BottomContainer>
    );
  }
}

PinBottom.propTypes = {
  data: PropTypes.object.isRequired,
  handleDelete: PropTypes.func.isRequired,
}
export default PinBottom;
