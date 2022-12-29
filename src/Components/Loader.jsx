import React from "react";
import { Circle, Load } from "../Styles/Loader";

const Loader = () => {
  return (
    <Load>
      <Circle></Circle>
      <Circle></Circle>
      <Circle></Circle>
      <Circle></Circle>
      <Circle></Circle>
    </Load>
  );
};

export default Loader;
