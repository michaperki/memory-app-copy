import styled from "styled-components";

const Header = () => {
  return <HeaderWrapper><h1>Rick and Morty Memory Game</h1></HeaderWrapper>;
};

const HeaderWrapper = styled.header`
  background: blue;
  color: white;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  h1 {
    font-size: 2rem;
    font-family: Arial, Helvetica, sans-serif;
  }


`;

export default Header;
