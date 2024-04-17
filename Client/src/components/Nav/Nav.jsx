import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";
import styled from "styled-components";



const Button = styled.button`
  background-color: rgba(255, 222, 173, 0.6);
  color: darkgreen;
  border: 0px;
  width: 120px;
  height: 30px;
  border-radius: 5px;
  font-weight: bold;
  font-size: 15px;
  margin: 15px 15px 0px 15px;
  display: inline-block;
  align-items: center;
  justify-content: center;
`;

export default function Nav({ onSearch, logout }) {
  return (
    <div>
      <Link to={"/"}>
        <Button onClick={logout}>LOGOUT</Button>
      </Link>
      <Link to={"/home"}>
        <Button>HOME</Button>
      </Link>
      <Link to={"/about"}>
        <Button>ABOUT</Button>
      </Link>
      <Link to="/favorites">
        <Button>FAVORITES</Button>
        </Link>
      <SearchBar onSearch={onSearch} />
    </div>
  );
};
