import React, { useRef, useState } from "react";
import RegisterImage from "../Resources/undraw_Wine_tasting_re_4jjf (2).png";
import SimpleReactValidator from "simple-react-validator";
import {
  Button,
  Container,
  Desc,
  Image,
  Input,
  InputContainer,
  InputsContainer,
  Label,
  Left,
  Right,
  Top,
  Validation,
} from "../Styles/Register";
import handleError from "../Scripts/handleError";

const Register = ({ setSlideIndex }) => {
  const [cocktailBar, setCocktailBar] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const validator = useRef(new SimpleReactValidator());

  const checkValidation = (e) => {
    e.preventDefault();
    if (
      validator.current.fields.email &&
      validator.current.fields.phone &&
      validator.current.fields.cocktailBar &&
      validator.current.fields.firstName &&
      validator.current.fields.lastName
    ) {
      setSlideIndex(1);
    } else {
      handleError("Please Enter Required Fileds");
    }
  };
  return (
    <Container>
      <Left>
        <Image src={RegisterImage}></Image>
        <Desc>First : Enter Your Information And Click Submit. </Desc>
        <Top>Need A Cocktail ?</Top>
      </Left>
      <Right>
        <InputsContainer>
          <InputContainer>
            <Label htmlFor="cocktailBar">Cocktail Bar Name :</Label>
            <Input
              id="cocktailBar"
              onChange={(e) => {
                setCocktailBar(e.target.value);
                validator.current.showMessageFor("cocktailBar");
              }}
              onBlur={validator.current.showMessageFor("cocktailBar")}
              value={cocktailBar}
            ></Input>
            <Validation>
              {validator.current.message(
                "cocktailBar",
                cocktailBar,
                "required"
              )}
            </Validation>
          </InputContainer>

          <InputContainer>
            <Label htmlFor="firstName">First Name : </Label>
            <Input
              id="firstName"
              onChange={(e) => {
                setFirstName(e.target.value);
                validator.current.showMessageFor("firstName");
              }}
              onBlur={validator.current.showMessageFor("firstName")}
              firstName={firstName}
            ></Input>
            <Validation>
              {validator.current.message("firstName", firstName, "required")}
            </Validation>
          </InputContainer>

          <InputContainer>
            <Label htmlFor="lastName">Last Name :</Label>
            <Input
              id="lastName"
              onChange={(e) => {
                setLastName(e.target.value);
                validator.current.showMessageFor("lastName");
              }}
              onBlur={validator.current.showMessageFor("lastName")}
              value={lastName}
            ></Input>
            <Validation>
              {validator.current.message("lastName", lastName, "required")}
            </Validation>
          </InputContainer>

          <InputContainer>
            <Label htmlFor="phone">Phone Number : </Label>
            <Input
              id="phone"
              onChange={(e) => {
                setPhone(e.target.value);
                validator.current.showMessageFor("phone");
              }}
              onBlur={validator.current.showMessageFor("phone")}
              value={phone}
            ></Input>
            <Validation>
              {validator.current.message("phone", phone, "required|phone")}
            </Validation>
          </InputContainer>

          <InputContainer>
            <Label htmlFor="email">Email Address : </Label>
            <Input
              id="email"
              onChange={(e) => {
                setEmail(e.target.value);
                validator.current.showMessageFor("email");
              }}
              onBlur={validator.current.showMessageFor("email")}
              value={email}
            ></Input>
            <Validation>
              {validator.current.message("email", email, "required|email")}
            </Validation>
          </InputContainer>

          <InputContainer>
            <Button
              type="submit"
              onClick={(e) => {
                checkValidation(e);
              }}
              value="Submit"
            ></Button>
          </InputContainer>
        </InputsContainer>
      </Right>
    </Container>
  );
};

export default Register;
