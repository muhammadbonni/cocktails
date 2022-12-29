import React, { useState } from "react";
import styled from "styled-components";
import Navbar from "../Components/Navbar";
import Stepper from "../Components/Stepper";
const Container = styled.div`
  position: relative;
`;

const Home = () => {
  const [alert, setAlert] = useState(false);

  return (
    <Container>
      <Navbar></Navbar>
      <Stepper></Stepper>
    </Container>
  );
};

export default Home;
