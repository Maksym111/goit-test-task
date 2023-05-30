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

export const NoDataTitle = styled.p`
  margin-top: 100px;
  text-align: center;

  font-weight: 700;
  font-size: 30px;
  font-style: italic;
`;

export const WrapFilter = styled.div`
  position: relative;
  display: inline-block;
  left: calc(100% - 270px);
  top: 15px;
`;
