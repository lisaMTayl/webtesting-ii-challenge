import React from 'react';

// Display component should:
//  display the count of balls and strikes for the a-bat
//  should be updated when the user records activity on the Dashboard component

const Display = ( props ) => {

  return (
    <div>
      <div><h2>Balls: {props.balls}</h2></div>
      <div><h2>Strikes: {props.strikes}</h2></div>
    </div>
  )
};

export default Display;



