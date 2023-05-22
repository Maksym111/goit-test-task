import styled from "@emotion/styled";
import mainBcgr from "../../assets/mainBcgr.jpg";
import { Link } from "react-router-dom";

export const MainSection = styled.div`
  height: 100vh;

  background: linear-gradient(
      112.58deg,
      #ffffff 18.15%,
      rgba(255, 255, 255, 0) 53.07%
    ),
    url(${mainBcgr}), rgba(0, 0, 0, 0.1);
  background-repeat: no-repeat;
  background-position: 100% auto;
  background-size: cover;
`;

export const Container = styled.div`
  margin: 0 250px;
  padding-top: 120px;
`;

export const InfoBlock = styled.div`
  width: 440px;

  font-family: "Lato";
  font-weight: 400;
  font-size: 20px;
`;

export const Title = styled.h1`
  margin-bottom: 30px;

  font-family: "Georgia";
  font-weight: 700;
  font-size: 65px;
  line-height: 74px;

  color: #01996d;
`;

export const SubTitle = styled.p`
  margin-bottom: 30px;

  line-height: 31px;

  color: #484848;
`;

export const MainButton = styled(Link)`
  margin-bottom: 30px;
  padding: 20px;

  line-height: 25px;
  text-align: center;

  color: #ffffff;

  font-size: 20px;
  line-height: 25px;
  background: #01996d;
  border: 1px solid #01996d;
  border-radius: 4px;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover {
    transform: translateY(-2px);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.4);
  }
`;
