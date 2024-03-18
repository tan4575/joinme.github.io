import React, { Component } from 'react'
const apiKey = process.env.REACT_APP_API_KEY;

export default class Introduction extends Component {
  render() {
    return (
      <div>
        <h1>About page 1.0, Secret: {apiKey}</h1>;
      </div>
    )
  }
}