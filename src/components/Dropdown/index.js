import React, { useState } from "react";
import styled from "styled-components";

// const Main = styled("div")`
//   font-family: sans-serif;
//   background: #f0f0f0;
//   height: 100vh;
// `;

const DropDownContainer = styled("div")`
  width:100%;
`;

const DropDownHeader = styled("div")`
  font-size: 1rem;
  color: white;
`;

const DropDownListContainer = styled("div")`
  position: absolute;
  top:105px;
  z-index: 100;
  width: 120px;
`;

const DropDownList = styled("ul")`
  padding: 0;
  margin: 0;
  background: white;
  border: 0;
  box-sizing: border-box;
  color: #1B998B;
  font-size: 1rem;
  font-weight: 500;
  &:first-child {
    padding-top: 0.8em;
  }
  &:last-child {
    padding-bottom: 0.3em;
  }
`;

const ListItem = styled("li")`
  list-style: none;
  margin-bottom: 0.8em;
  &:hover {
    color: #fd9e46;
  }
`;

const options = ["Semillas", "Arboles", "Flores"];

export default function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = (value) => () => {
    setSelectedOption(value);
    setIsOpen(false);
    console.log(selectedOption);
  };

  return (
    <DropDownContainer>
      <DropDownHeader onClick={toggling}>
        {selectedOption || "Categorias"}
      </DropDownHeader>
      {isOpen && (
        <DropDownListContainer>
          <DropDownList>
            {options.map((option) => (
              <ListItem onClick={onOptionClicked(option)} key={Math.random()}>
                {option}
              </ListItem>
            ))}
          </DropDownList>
        </DropDownListContainer>
      )}
    </DropDownContainer>
  );
}
