import styled from "@emotion/styled";
import messagesImg from "../../assets/message-img.png";

export const CardWrap = styled.div`
  position: relative;
  width: 380px;
  height: 460px;
  background: url(${messagesImg}) 36px 28px no-repeat,
    linear-gradient(114.99deg, #471ca9 -0.99%, #5736a3 54.28%, #4b2a99 78.99%);
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;

  overflow: hidden;
`;

export const Logo = styled.img`
  position: absolute;
  left: 20px;
  top: 20px;
`;

export const FollowerImgWrap = styled.div`
  position: relative;
  top: 50%;
  transform: translateY(-50%);

  ::after {
    content: "";
    z-index: -1;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);

    display: block;
    width: 100%;
    height: 8px;
    background: #ebd8ff;
    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
      inset 0px -1.71846px 3.43693px #ae7be3,
      inset 0px 3.43693px 2.5777px #fbf8ff;
  }
`;

export const FollowerImg = styled.img`
  margin: 0 auto;
  border: 9px solid #ebd8ff;
  border-radius: 50%;

  background-color: #5736a3;
`;
