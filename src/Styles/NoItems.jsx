import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;
const Left = styled.div`
  flex: 1;
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
`;

const Right = styled.div`
  flex: 1;
  margin-top: 100px;
`;

const Title = styled.h1`
  color: var(--main-color);
  font-size: 48px;
`;

const Content = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: var(--text-gray);
`;
export { Container, Left, Right, Image, Title, Content };
