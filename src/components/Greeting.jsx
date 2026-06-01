import React from "react";

const Greeting = (props) => {
  console.log(props);

  return <div>welcome {props.name}</div>;
};

export default Greeting;
