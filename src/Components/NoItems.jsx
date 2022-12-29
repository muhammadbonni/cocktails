import React from "react";
import {
  Container,
  Left,
  Right,
  Image,
  Title,
  Content,
} from "../Styles/NoItems";
import LeftImage from "../Resources/undraw_Empty_re_opql.png";

const NoItems = () => {
  return (
    <Container>
      <Left>
        <Image src={LeftImage}></Image>
      </Left>
      <Right>
        <Title>Oops!</Title>
        <Content>
          We Are Sorry But There Is No Items To Show. <br /> Please Reduce Your
          Filters And Try Again
        </Content>
      </Right>
    </Container>
  );
};

export default NoItems;
