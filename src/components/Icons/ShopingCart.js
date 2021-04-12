import React from "react";
import Icon from "./Icon";

function ShoppingCart(props) {
  return (
    <Icon size={props.size} color={props.color}>
      <g fill="#000000" stroke={props.color} strokeLinecap="square" strokeWidth="2">
        <polyline
          fill="none"
          points="10 10 45 10 41 31 13 31 9 3 2 3"
          stroke={props.color}
          strokeLinecap="butt"
        />
        <circle cx="15" cy="41" fill="none" r="4" />
        <circle cx="40" cy="41" fill="none" r="4" />
      </g>
    </Icon>
  );
}

export default ShoppingCart;
