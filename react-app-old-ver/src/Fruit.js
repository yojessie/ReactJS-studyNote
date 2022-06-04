import React from "react";
import PropTypes from "prop-types";

function Fruit(props) {
  return (
    <div>
      <h3>I love {props.name}</h3>
      <p>
        I can eat {props.name} at {props.season}!
      </p>
      <p>
        And I have {props.have} {props.name}s right now!
      </p>
    </div>
  );
}

Fruit.propTypes = {
  name: PropTypes.string.isRequired,
  season: PropTypes.string,
  have: PropTypes.number.isRequired,
};

export default Fruit;
