import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  box-shadow: var(--shadow);
  position: sticky;
  top: 0;
  z-index: 100;
  background-color: white;
  opacity: 0.95;
`;

const Wrapper = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  letter-spacing: 0.5px;
  font-size: 24px;
  font-weight: 800;
  color: var(--text-gray);
`;

const Logo = styled.span`
  font-size: 38px;

  background-color: var(--red);
  padding: 10px 20px;
  margin-right: 5px;
  border-radius: 5px;
  color: white;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
  cursor: pointer;
`;

const Center = styled.ul`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;
  font-size: 18px;
  color: var(--text-gray);

  * {
    font-weight: 700;
    transition: all 0.5s ease;
    cursor: pointer;
    padding: 0 20px;
    margin: 10px 10px;
    :first-child {
      background-color: var(--main-color);
      border-radius: 5px;
    }
    :hover {
      background-color: var(--main-color);
      border-radius: 5px;
    }
  }
`;

const Right = styled.div`
  flex: 1;
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo>D</Logo>
          <span>rink Bar</span>
        </Left>
        <Center></Center>
        <Right></Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
