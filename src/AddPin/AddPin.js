import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../Actions';
import { withRouter } from 'react-router-dom';
import { MainContainer, FormContainer, Value, Title } from './addpin_styled';
import { Form, FormInput, FormButton } from './addpin_styled';

class AddPin extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      imgUrl: ""
    }
  }
  handleChange(evt, attToChange){
    switch(attToChange){
      case "title":
        this.setState({title: evt.target.value});
        break;
      case "imgUrl":
        this.setState({imgUrl: evt.target.value});
        break;
      default:
        break;
    }
  }
  handleSubmit = (evt) => {
    evt.preventDefault();
    const { getAccessToken } = this.props.auth;

    //todo replace this placeholder url with private link (not imgur)
    const ph_url = "https://imgur.com/NynY6oi"
    const headers = { 'Authorization': `Bearer ${getAccessToken()}`}
    const imgUrl = (this.state.imgUrl !== "") ? this.state.imgUrl : ph_url;

    this.props.createPin({url: imgUrl, title: this.state.title}, headers);
    this.props.history.push('./home');
  };
  render() {
    return (
      <MainContainer>
        <FormContainer>
          <Form onSubmit={this.handleSubmit}>
            <Title> Create a New Pin </Title>
            <Value>Title</Value>
            <FormInput type="text"
                   placeholder="Title"
                   value={this.state.title}
                   onChange={(evt) => this.handleChange(evt, "title")}
             />
            <Value>Image Url</Value>
            <FormInput type="text"
                   placeholder="Image Url"
                   value={this.state.imgUrl}
                   onChange={(evt) => this.handleChange(evt, "imgUrl")}
            />
            <br></br>
            <FormButton>Create</FormButton>
          </Form>
        </FormContainer>
      </MainContainer>
    );
  }
}

export default withRouter(connect(null, actions)(AddPin));
