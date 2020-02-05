// import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import Stars from "./Stars";

// class FilmCard extends Component {
//   state = {};

//   render() {
//     const { film } = this.props;
//     console.log("film", { film });
//     return (
//       <div>
//         <p>{film.id}</p>
//         <p>{film.name}</p>
//         <p>{film.age}</p>
//         <p>{film.email}</p>
//         <Link to={`/film/${film.id}/stars`}> Stars </Link>
//         <Route
//           path="/film/:filmId/stars"
//           render={() => <Stars stars={film.stars} />}
//         />
//       </div>
//     );
//   }
// }

// export default FilmCard;
