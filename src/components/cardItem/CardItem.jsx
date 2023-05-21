import { FollowerInfo } from "../followerInfo/FollowerInfo";
import logo from "../../assets/Logo.png";
import followerImg from "../../assets/followerImg.png";
import {
  CardWrap,
  FollowerImg,
  FollowerImgWrap,
  Logo,
} from "./CardItem.styled";

export const CardItem = ({ info, updFollowers }) => {
  return (
    <>
      <CardWrap>
        <Logo src={logo} alt="Logo" />

        <FollowerImgWrap>
          <FollowerImg
            src={info.avatar || followerImg}
            width="62"
            height="62"
            alt="Icon Follower"
          />
        </FollowerImgWrap>
        <FollowerInfo info={info} updFollowers={updFollowers} />
      </CardWrap>
    </>
  );
};
