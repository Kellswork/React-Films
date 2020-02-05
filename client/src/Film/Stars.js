import React from "react";

const Stars = props => {
  console.log("stars", props);
  return props.stars.map(star => (
    <ul style={{listStyle:'none'}}>
      <li>{star}</li>
    </ul>
  ));
};

export default Stars;