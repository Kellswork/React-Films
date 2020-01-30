import React, { Component } from "react";
// import axios from 'axios';

export default class Film extends Component {
  constructor(props) {
    super(props);
    this.state = {
      film: []
    };
    //console.log("film", this.props);
  }

  // Uncomment this code when you're ready to work on the saveList
  // componentWillReceiveProps(newProps){
  //   if(this.props.match.params.id !== newProps.match.params.id){
  //     this.fetchMovie(newProps.match.params.id);
  //   }
  // }

  // saveFilm = () => {
  //   const addToSavedList = this.props.addToSavedList;
  //   addToSavedList(this.state.movie)
  // }

  render() {
    const { film } = this.props;
    return (
      <div>
        <h2>Hi again lol filmList</h2>
        <div key={film.id}>
          <h3>{film.title}</h3>
          <p>{film.director}</p>
          <p>{film.metascore}</p>
          <hr />
        </div>
      </div>
    );
  }
}
