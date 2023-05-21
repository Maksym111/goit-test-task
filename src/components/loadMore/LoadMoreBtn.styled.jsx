import styled from "@emotion/styled";

export const LoadBtn = styled.button`
  display: block;
  margin: 30px auto;
  padding: 14px 39px;
  font-weight: 600;
  font-size: 18px;
  line-height: 0.81;

  background-color: #a207c9;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);

  border-color: transparent;
  border-radius: 10.3108px;

  color: #ffffff;
  text-transform: uppercase;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover {
    transform: translateY(-2px);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.4);
  }
`;
