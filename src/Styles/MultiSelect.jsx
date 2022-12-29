import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  margin: 0 60px;
`;

const LeftContainer = styled.div`
  flex: 1;
  margin: 20px 0;
  border: 1px solid lightgray;
  border-radius: 25px 0 0 25px;
  :nth-child(2) {
    border-radius: 0 25px 25px 0;
  }
`;

const Left = styled.div`
  overflow: scroll;
  height: 100vh;
`;

const Title = styled.h3`
  color: var(--text-gray);
  text-align: center;
  padding: 10px;
  border-bottom: 1px solid lightgray;
`;

const Item = styled.div`
  padding: 5px 20px 5px;
  cursor: pointer;
  border-bottom: 1px solid lightgray;
  display: flex;
  justify-content: space-between;
  align-items: center;
  :hover {
    background-color: var(--light-purble);
  }
`;

const AddButton = styled.button`
  background-color: var(--main-color);
  border-radius: 50%;
  height: 25px;
  width: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  border: none;
  cursor: pointer;
`;

const Right = styled.div`
  flex: 1;
`;

export { Wrapper, Left, Right, Item, Title, LeftContainer, AddButton };
