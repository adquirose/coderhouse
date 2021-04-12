import React from "react";
import Icon from "./Icon";
function Search(props) {
  return (
    <Icon size={props.size}>
      <g fill="#000000" stroke={props.color} strokeLinecap="square" strokeWidth="2">
        <line fill="none" x1="44" x2="35" y1="44" y2="35" />
        <circle cx="20" cy="20" fill="none" r="16" stroke={props.color} />
        <path d="M10,20A10,10,0,0,1,20,10" fill="none" strokeLinecap="butt" />
      </g>
    </Icon>
  );
}

export default Search;
