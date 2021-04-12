import React from "react";
import Icon from './Icon'
function PinUser(props) {
  return (
    <Icon size={props.size} color={props.color}>
        <g fill="#000000" stroke={props.color} strokeLinecap="square" strokeWidth="2">
            <path
            d="M40,18c0,11-16,27-16,27S8,29,8,18A15.854,15.854,0,0,1,24,2,15.854,15.854,0,0,1,40,18Z"
            fill="none"
            stroke={props.color}
            />
            <path
            d="M32,26H16V23.869a2.991,2.991,0,0,1,1.919-2.8,17.711,17.711,0,0,1,12.15.013A2.993,2.993,0,0,1,32,23.886Z"
            fill="none"
            />
            <path
            d="M20,12.091a4,4,0,1,1,8,0C28,14.35,26.209,17,24,17S20,14.35,20,12.091Z"
            fill="none"
            />
      </g>
    </Icon>
  );
}

export default PinUser;
