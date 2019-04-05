import React from "react";
import styled from "styled-components";
import Font from "../Utilities/Font";
import Breakpoints from "../Elements/breakpoints";

const List = ({ choosePhotoFun }) => (
  <ListContainer>
    <ListSkew>
      <ListItem onClick={() => choosePhotoFun("Nafnspjold")}>
        <Font>Nafnspjöld</Font>
      </ListItem>
      <ListItem onClick={() => choosePhotoFun("Jolakort")}>
        <Font>Sálmaskrár</Font>
      </ListItem>
      <ListItem onClick={() => choosePhotoFun("Reikningar")}>
        <Font>Reikningar</Font>
      </ListItem>
      <ListItem>
        <Font>Tímarit </Font>
      </ListItem>
    </ListSkew>
  </ListContainer>
);

export default List;

const ListContainer = styled.div`
  width: 50%;
  transform: skew(20deg);
  background: #fa5757;
  position: absolute;
  z-index: 5;
  top: 0;
  left: -150px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: ${Breakpoints.desktop}px) {
    height: 100px;
    width: 100%;
    left: 0;
    transform: skew(0);
    position: relative;
  }

  @media (max-width: ${Breakpoints.portrait}px) {
    height: 80px;
  }

  @media (max-width: ${Breakpoints.phone}px) {
    height: 60px;
  }
`;

const ListSkew = styled.div`
  transform: skew(-20deg);
  display: flex;
  flex-direction: column;
  margin: 0px auto;
  justify-content: space-around;

  @media (max-width: ${Breakpoints.desktop}px) {
    flex-direction: row;
    transform: skew(0);
    justify-content: space-evenly;
    margin: 0px;
    width: 100%;
  }
`;

const ListItem = styled.button`
  margin: 30px 0px;
  border-radius: 50px;
  background-color: transparent;
  font-size: 50px;
  color: white;
  border: 2px solid transparent;
  overflow: hidden;
  outline: none;
  transition: all 0.4s ease;
  text-align: left;

  @media (max-width: ${Breakpoints.desktop}px) {
    font-size: 30px;
  }

  @media (max-width: ${Breakpoints.portrait}px) {
    font-size: 20px;
  }

  @media (max-width: ${Breakpoints.phone}px) {
    font-size: 12px;
  }
  &:hover,
  &:active,
  &:focus {
    background-color: white;
    color: #fa5757;
    cursor: pointer;
  }
`;
