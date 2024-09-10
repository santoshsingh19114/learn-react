import React from 'react'

const Card = (props) => {
  const classes =`card ${props.className}`;
  return (
    <div className={classes}>{props.children}</div>
  )
}

export default Card;


// import React from 'react';

// const Card = (props) => {
//   const classes = `card ${props.className}`; // Use `className` instead of `classes`
//   return (
//     <div className={classes}>{props.children}</div> // Use `className` correctly
//   );
// };

// export default Card;
