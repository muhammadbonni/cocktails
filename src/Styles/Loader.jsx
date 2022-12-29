import styled from "styled-components";

const Load = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  min-height: 30vh;
`;

const Circle = styled.div`
  width: 40px;
  height: 40px;
  background-color: var(--main-color);
  border-radius: 50%;
  margin: 0 5px;
  animation-name: up-and-down;
  animation-duration: 0.5s;
  animation-iteration-count: infinite;
  animation-direction: alternate;

  :nth-child(2) {
    animation-delay: 0.1s;
  }
  :nth-child(3) {
    animation-delay: 0.2s;
  }
  :nth-child(4) {
    animation-delay: 0.3s;
  }

  :nth-child(5) {
    animation-delay: 0.4s;
  }

  @keyframes up-and-down {
    to {
      transform: translateY(-40px);
    }
  }
`;

export { Circle, Load };
