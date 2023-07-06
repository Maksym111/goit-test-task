import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
  position: relative;
  padding-top: 20px;
`;

export const GoBackLink = styled(Link)`
  position: relative;
  top: 5px;
  left: 20px;
  padding: 10px 25px;

  background-color: #555e01;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);

  font-size: 15px;
  color: #fff;

  border-radius: 10px;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover {
    transform: translateY(-2px);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.4);
  }
`;
