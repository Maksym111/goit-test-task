import styled from "@emotion/styled";

export const ListInfo = styled.ul`
  position: absolute;
  bottom: 36px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  li {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    text-transform: uppercase;

    color: #ebd8ff;
  }
`;

export const TweetsCount = styled.li`
  margin-bottom: 16px;
`;
export const FollowersCount = styled.li`
  margin-bottom: 26px;
`;

export const WrapBtn = styled.li``;

export const FollowBtn = styled.button`
  padding: ${({ isChecked }) => (isChecked ? "14px 39px" : "14px 56px")};
  font-weight: 600;
  font-size: 18px;
  line-height: 0.81;

  background-color: ${({ isChecked }) => (isChecked ? "#5CD3A8" : "#ebd8ff")};
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);

  border-color: transparent;
  border-radius: 10.3108px;

  color: #373737;
  text-transform: uppercase;

  :hover {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.4);
  }
`;
