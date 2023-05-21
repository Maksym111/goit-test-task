import styled from "@emotion/styled";

export const CardsList = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding-top: 30px;
  gap: 30px;
`;

export const CardItem = styled.li`
  width: calc((100% - 6 * 15px) / 3);
`;
