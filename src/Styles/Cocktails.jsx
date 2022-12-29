import styled from "styled-components";
import CategoryOutlinedIcon from "@mui/icons-material/CategoryOutlined";
import SportsBarOutlinedIcon from "@mui/icons-material/SportsBarOutlined";
import NoDrinksOutlinedIcon from "@mui/icons-material/NoDrinksOutlined";

const Header = styled.h1`
  color: var(--text-gray);
  border-radius: 25px 25px 0 0;
  margin-top: -20px;
  margin-bottom: 20px;
  text-align: center;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  margin: 10px 0;
  padding-bottom: 10px;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid lightgray;
  border-radius: 15px;
  transition: all 0.5s ease;
  background-color: white;
  cursor: pointer;
  :hover {
    box-shadow: var(--shadow);
  }
`;

const Top = styled.div`
  flex: 1;
  display: flex;
`;

const Image = styled.img`
  height: 80%;
  width: 100%;
  border-radius: 15px 15px 0 0;
`;

const Bottom = styled.div`
  flex: 1.5;
  margin: -50px 10px 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const SelectionsContainer = styled.div`
  display: flex;
  margin-left: 10px;
  flex-wrap: wrap;
`;

const Selections = styled.div`
  display: flex;
  align-items: center;
  border-radius: 25px;
  font-size: 10px;
  font-weight: 800;
  background-color: ${(props) => props.background};
  color: ${(props) => props.color};
  margin: 5px 5px 5px 0;
  padding: 5px 5px 5px 0;
  white-space: nowrap;
`;

const CategoryImage = styled(CategoryOutlinedIcon)`
  &&& {
    font-size: 14px;
    padding: 0 5px 0;
  }
`;

const TypeImage = styled(NoDrinksOutlinedIcon)`
  &&& {
    font-size: 14px;
    padding: 0 5px 0;
  }
`;

const GlassImage = styled(SportsBarOutlinedIcon)`
  &&& {
    font-size: 14px;
    padding: 0 5px 0;
  }
`;

const Title = styled.h2`
  color: var(--text-gray);
  margin: 0 15px 0;
`;

const Instructions = styled.p`
  color: var(--text-gray);
  margin: 0 15px 10px;
  font-size: 14px;
  font-weight: 600;
`;

const RateContainer = styled.div`
  display: flex;
  flex: 1;
  margin: 0 15px;
  align-items: flex-end;
`;

const RateWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1;
`;
const Rate = styled.div`
  display: flex;
  align-items: center;
  color: orange;
`;

const BtnDetails = styled.button`
  cursor: pointer;
  background-color: white;
  color: var(--green);
  font-size: 16px;
  font-weight: 700;
  border: 2px solid var(--green);
  border-radius: 10px;
  padding: 5px 20px;
  margin: 10px 0 0 10px;
  transition: all 0.5s ease;
  :hover {
    background-color: var(--green);
    color: white;
  }
`;

export {
  Header,
  Container,
  Bottom,
  BtnDetails,
  Card,
  CategoryImage,
  GlassImage,
  Image,
  Instructions,
  Rate,
  RateContainer,
  RateWrapper,
  Selections,
  SelectionsContainer,
  Title,
  Top,
  TypeImage,
};
