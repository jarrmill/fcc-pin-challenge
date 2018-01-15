import React, { Component } from 'react';
import styled from 'styled-components';

const logo_with_text = require('./Assets/logo_text.png');

//TODO export this to a dedicated page and import
const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 50px;
  width: 100vw;
  border-bottom: 1px solid #eee;
  justify-content: flex-start;
  align-items: center;

  @media (max-width: 600px){
    flex-direction: column;
    height: auto;
  }
`
const Button = styled.button`
  background-color: transparent;
  border-radius: 25px;
  border: none;
  color: #555;
  font-size: 100%;
  height: 40px;
  width: 90px;

  &:hover{
    background-color: #555;
    color: white;
  }
  &:focus{
    outline: none;
  }
`
const Logo = styled.img`
  height: 40px;
  padding-bottom: 5px;
`

class Header extends Component {
  goTo(route) {
    this.props.history.replace(`/${route}`)
  }

  login() {
    this.props.auth.login();
  }

  logout() {
    this.props.auth.logout();
  }

  render() {
    const { isAuthenticated } = this.props.auth;

    return (
      <HeaderContainer>
        <Logo src={logo_with_text}/>
        <Button
          bsStyle="primary"
          className="btn-margin"
          onClick={this.goTo.bind(this, 'home')}
        >
          Home
        </Button>
        {
          !isAuthenticated() && (
              <Button
                onClick={this.login.bind(this)}
              >
                Log In
              </Button>
            )
        }
        {
          isAuthenticated() && (
              <Button
                onClick={this.goTo.bind(this, 'profile')}
              >
                Profile
              </Button>
            )
        }
        {
          isAuthenticated() && (
              <Button
                onClick={this.goTo.bind(this, 'userpins')}
              >
                Your Pins
              </Button>
            )
        }
        {
          isAuthenticated() && (
              <Button
                onClick={this.goTo.bind(this, 'addpin')}
              >
                Add a Pin
              </Button>
            )
        }
        {
          isAuthenticated() && (
              <Button
                onClick={this.logout.bind(this)}
              >
                Log Out
              </Button>
            )
        }
      </HeaderContainer>
    );
  }
}

export default Header;
