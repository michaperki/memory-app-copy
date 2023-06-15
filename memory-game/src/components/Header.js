import styled from "styled-components";

const Header = () => {
  return <HeaderWrapper>Rick and Morty Memory Game</HeaderWrapper>;
};

const HeaderWrapper = styled.header`
  background: blue;
  color: white;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default Header;
