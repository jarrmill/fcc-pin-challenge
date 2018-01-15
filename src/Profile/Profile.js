import React, { Component } from 'react';
import axios from 'axios';

class Profile extends Component {
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
  getSecured = () => {
    const root = process.env.REACT_APP_DB_PATH || "http://localhost:8080";
    const { getAccessToken } = this.props.auth;
    const headers = { 'Authorization': `Bearer ${getAccessToken()}`}
    console.log(headers);
    axios.get(`${root}/authorized`, {headers}).then(response => {
      console.log("SUCCESS!", response);
    }).catch(error => {
      console.log("ERROR! ", error);
    });
  };
  getPublic = () => {
    axios.get("http://localhost:8080/public").then(response => {
      console.log("SUCCESS!", response);
    }).catch(error => {
      console.log("ERROR! ", error);
    });
  }
  render() {
    const { profile } = this.state;
    return (
      <div>
        <div>
          <h1>{profile.name}</h1>
          <div>
            <img src={profile.picture} alt="profile" />
            <div>
              <h3>{profile.nickname}</h3>
            </div>
            <p>{JSON.stringify(profile, null, 2)}</p>
          </div>
          <div>
            <button onClick={() => this.getSecured()}>secured</button>
            <button onClick={() => this.getPublic()}>public</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
