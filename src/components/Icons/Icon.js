import React from 'react'

function Icon(props) {
    return (
      <svg
        height={props.size}
        width={props.size}
        viewBox="0 0 48 48"
        xmlns="http://www.w3.org/2000/svg"
      >
        {props.children}
      </svg>
    );
}
export default Icon