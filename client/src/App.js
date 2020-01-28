import React, { Component } from 'react';
import axios from 'axios'

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      savedList: []
    };
  }

  componentDidMount() {
    axios.get('http://localhost:5000/api/film').then(response => console.log(response))
  }
  addToSavedList = movie => {
    
  };

  render() {
    return (
      <div>
        Hi, Build Me Pleasee!
      </div>
    );
  }
}
