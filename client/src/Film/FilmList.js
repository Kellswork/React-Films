import React, { Component } from "react";
import { Link } from "react-router-dom";
import Film from "./Film";

export default class FilmList extends Component {
  constructor() {
    super();
    this.state = {
      films: [],
      isLoading: true,
      errors: null
    };
    console.log("filmlist", this.props);
  }

  render() {
    console.log(this.props);
    const { isLoading, films } = this.props;
    return (
      <div className="film-list">
        <h2>Hi I'm the film list component</h2>

        <div>
          {!isLoading ? (
            films.map(film => {
              //const { id, title, director, metascore } = film;
              const { id } = film;
              return (
                <Link to={`/film/${id}`} key={id}>
                  <Film key={id} filmId={id} film={film} />
                </Link>
              );
            })
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    );
  }
}

// {!isLoading ? (
//   films.map(film => {
//     const { _id, title, director, metascore } = film;
//     return (
//       <div key={_id}>
//         <h2>{title}</h2>
//         <p>{director}</p>
//         <p>{metascore}</p>
//         <hr />
//       </div>
//     );
//   })
// ) : (
//   <p>Loading...</p>
// )}
