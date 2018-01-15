import React from "react";
import PropTypes from 'prop-types';
import { BottomContainer, ProfileCT, InfoCT, LikeShare } from './viewpins_styled';
import { LikeShareBtn, ProfilePic, UserName } from './viewpins_styled';

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
          <LikeShare>
            <LikeShareBtn
              onClick={() => this.props.handleLike(data)}
              like >
              <i className="fa fa-heart" ariaHidden="true"></i>
            </LikeShareBtn>
            <p>{data.likes.length}</p>
          </LikeShare>
          <LikeShare>
            <LikeShareBtn
             onClick={() => this.props.handleShare(data)}>
             <i className="fa fa-retweet" ariaHidden="true"></i>
            </LikeShareBtn>
            <p>{data.shares.length}</p>
          </LikeShare>
        </InfoCT>
      </BottomContainer>
    );
  }
}

PinBottom.propTypes = {
  data: PropTypes.object.isRequired,
  handleLike: PropTypes.func.isRequired,
  handleShare: PropTypes.func.isRequired,
}
export default PinBottom;
